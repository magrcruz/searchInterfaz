import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    'https://fzcgfvllydvrjndcdfai.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6Y2dmdmxseWR2cmpuZGNkZmFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzEwMjEsImV4cCI6MjAxNDg0NzAyMX0.4qt1oSAklhyCJQ0Kd5tVFhrJdg472D4OS2C3RKTKfcw'
)

export { supabase }