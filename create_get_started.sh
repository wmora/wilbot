curl -X POST -H "Content-Type: application/json" -d '{
  "setting_type":"call_to_actions",
  "thread_state":"new_thread",
  "call_to_actions":[
    {
      "payload":"get_started"
    }
  ]
}' "https://graph.facebook.com/v2.6/me/thread_settings?access_token=$1"
