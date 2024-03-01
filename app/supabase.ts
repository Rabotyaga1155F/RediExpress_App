import {createClient} from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const supabase = createClient(
  'https://ztqxohmtodfetahocnrg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0cXhvaG10b2RmZXRhaG9jbnJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNDcwNDIsImV4cCI6MjAyMzkyMzA0Mn0.ape80PyCXnWCQBW1FuJEBrCw4e-kElueq50OjkqjiKk',
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  },
);
