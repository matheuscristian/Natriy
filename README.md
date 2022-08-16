# **ConfBot**: easy peasy bot creation
This is the most new released version (in development branch) of ConfBot! This new version is coming out with many improvements and better performance. Which will make *your* experience with ConfBot the best possible!

## What I have done so far:
I've been working on the functions that were present on the 'old' ConfBot. **But it won't take so long!** I'm sure in few days I'm gonna be ready to start creating other functions.

## Can I test this version now?
For sure! You can download ConfBot as you normally did with the 'old' version and use it however you like.

# New features already in:

## Logs
Now, you can see every command people ran in your server. If you want to see the logs, go to the file `logs.log` and spy everyone.

## Personalize every message
You can personalize every message that your bot will send. Got to the file `config/lang.json` and change the texts however you like.

## Back with variables!
A while ago I decided to remove the *variables*, but now, they are back!

### How does it work?
Simple. For example: if you set a function to send *{user}* it will be replaced by the mention of who sent the command

### These are the variables:
- {user}: Mention of who sent the command

- {fmention}: First mention in the message sent by the {user}

- {user_icon}: URL of the user icon

- {user_name}: Only the username of the user



## Better ban and kick functions
Now, the ban/kick structure is like this:
```json
"name": "ban",
"member": "{user}",
"reason": "Refused to be owned by ***King Bob***.",
"yourself": true,
"bot": true
```

Where:
- "ban": name of the function.

- "{user}": user who sent the message.

- "Refused to be owned by ***King Bob***.": Custom reason to ban/kick someone. If not especified, take it from the message.

- "yourself": Set if the function will be able to ban who sent the message.

- "bot": Set who will be responsible for banning/kicking someone. If bot is selected, the user doesn't need to have *admin* permissions

### Callback
Now, the ban/kick functions also have a callback (function that will be executed after banning/kicking someone)

You can set it like this:
```json
"callback": {
  "name": "say",
  "message": "User banned!"
}
```

## Better button function
### Expiration time
You can set a expiration time to the button:
```json
"expiration": 60000
```

The expiration is in miliseconds: second divided by 1000

### Time's up callback
You also can set a `timeEndCallback`, which is a simple function like this:
```json
"timeEndCallback": {
  "name": "reply",
  "message": "Banned!! Ohwn my goood"
}
```

## Sleep function
Simple usage:
```json
[
  {
    "name": "say",
    "message": "Hello!"
  },
  {
    "name": "sleep",
    "time": 5000,
    "callback": {
      "name": "reply",
      "message": "Have I already said 'Hello' to you?"
    }
  }
]
```