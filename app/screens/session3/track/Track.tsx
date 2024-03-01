import React, {useEffect, useRef, useState} from 'react';
// @ts-ignore
import XMLParser from 'react-xml-parser';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import YaMap, {Marker, Polyline} from 'react-native-yamap';
import TrackDelivery from '../../../components/track-delivery/TrackDelivery.tsx';
import BasicButton from '../../../ui/buttons/basic-button/BasicButton.tsx';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store.ts';
import {supabase} from '../../../supabase.ts';
import {useNavigation} from '@react-navigation/native';
import {YAMAP_GEO_API_KEY} from '../../../../env.ts';

interface Point {
  lat: number;
  lon: number;
}

const Track = () => {
  const navigation = useNavigation();
  const userInfo = useSelector((state: RootState) => state.user);
  const userEmailWithGoogleAuth = userInfo?.userInfo?.user?.email;
  let userEmail = '';

  const [trackNumber, setTrackNumber] = useState('');
  const [Package, setPackage] = useState<any[]>([]);
  const [firstPoint, setFirstPoint] = useState<Point | null>(null);
  const [secondPoint, setSecondPoint] = useState<Point | null>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    userEmail =
      userEmailWithGoogleAuth === undefined
        ? userInfo.userInfo
        : userEmailWithGoogleAuth;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let {data, error} = await supabase
          .from('Package')
          .select('*')
          .eq('sender_email', userEmail)
          .eq('completed', false);

        if (error) {
          throw error;
        }
        setPackage(data || []);
        console.log(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Package.length > 0) {
      const packageData = Package[0];
      setTrackNumber(packageData.track_number);
    }
  }, [Package]);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        if (Package.length > 0) {
          const responseOrigin = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${YAMAP_GEO_API_KEY}&geocode=${Package[0].origin_city},${Package[0].origin_address}`,
          );
          const responseDestination = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${YAMAP_GEO_API_KEY}&geocode=${Package[0].destination_city},${Package[0].destination_address}`,
          );

          const xmlOrigin = await responseOrigin.text();
          const xmlDestination = await responseDestination.text();

          const xmlOriginDoc = new XMLParser().parseFromString(xmlOrigin);
          const xmlDestinationDoc = new XMLParser().parseFromString(
            xmlDestination,
          );

          const posOriginElement = xmlOriginDoc.getElementsByTagName('pos')[0];
          const posDestinationElement =
            xmlDestinationDoc.getElementsByTagName('pos')[0];

          if (posOriginElement && posDestinationElement) {
            const [lon1, lat1] = posOriginElement.value
              .split(' ')
              .map(parseFloat);
            const [lon2, lat2] = posDestinationElement.value
              .split(' ')
              .map(parseFloat);

            setFirstPoint({lon: lon1, lat: lat1});
            setSecondPoint({lon: lon2, lat: lat2});
          } else {
            console.error('pos element not found in XML');
          }
        } else {
        }
      } catch (error) {
        console.error('Error fetching geocode:', error);
      }
    };

    fetchCoords();
  }, [Package]);

  useEffect(() => {
    const getRoutes = () => {
      if (mapRef.current && firstPoint && secondPoint) {
        mapRef.current.findDrivingRoutes(
          [firstPoint, secondPoint],
          (evt: any) => {
            const arr: Point[] = [];
            if (evt.routes && evt.routes.length > 0) {
              evt.routes[0].sections.forEach((section: any) => {
                if (section.points && section.points.length > 0) {
                  section.points.forEach((point: any) => {
                    arr.push({lat: point.lat, lon: point.lon});
                  });
                }
              });
              setPoints(arr);
            } else {
              console.error('No routes found');
            }
          },
        );
      }
    };

    getRoutes();
  }, [firstPoint, secondPoint]);

  return (
    <ScrollView>
      {Package.length > 0 ? (
        <>
          <YaMap
            ref={mapRef}
            initialRegion={{lat: 56.84, lon: 60.63, zoom: 10, tilt: 100}}
            userLocationIcon={{
              uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png',
            }}
            className={'w-[390px] h-[280px]'}>
            {firstPoint && (
              <Marker point={{lon: firstPoint.lon, lat: firstPoint.lat}} />
            )}
            {secondPoint && (
              <Marker point={{lon: secondPoint.lon, lat: secondPoint.lat}} />
            )}
            {points.length > 0 && (
              <Polyline
                points={points}
                strokeColor={'#0560FA'}
                strokeWidth={4}
              />
            )}
          </YaMap>
          <View className={'mx-6'}>
            <Text className={'text-[#3A3A3A] font-medium text-[16px] mt-4'}>
              Tracking Number
            </Text>
            <View className={'flex-row items-center mt-4'}>
              <Image
                source={require('../../../../assets/images/icons/track-icon.png')}
              />
              <Text className={'text-[#0560FA] ml-2 text-[16px]'}>
                {trackNumber}
              </Text>
            </View>
            <Text className={'mt-4'}>Package Status</Text>
            <TrackDelivery />
            <BasicButton
              onPress={() => navigation.navigate('SendAPackageTwo' as never)}>
              View Package Info
            </BasicButton>
          </View>
        </>
      ) : (
        <View className={'flex-row justify-center'}></View>
      )}
    </ScrollView>
  );
};

export default Track;
