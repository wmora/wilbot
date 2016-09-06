curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type":"greeting",
  "greeting":{
    "text":"Hello 👋! I'"'"'m Wilbot, Will'"'"'s personal bot. Let'"'"'s get started"
  }
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=$1"
