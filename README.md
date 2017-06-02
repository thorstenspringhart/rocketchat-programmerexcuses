# Excuses for lazy Programmers in Rocket.Chat

## Overview 
GuggyRocketChat is a slash-style-command for <a href='https://rocket.chat'>Rocket.Chat</a> which show a "excuse for lazy programmer"

## Usage
Send a message with the content `!sorry` and a random exuse will be posted

## Installation

### Configure Rocket.Chat
Add an "Incoming Webhook" to your Rocket-Chat Instance (see <a href="https://rocket.chat/docs/administrator-guides/integrations/">Rocket.Chat Documentation</a>)

On the webhook config screen, set the following values:

##### Trigger Words
Set the trigger words on which the command should be fired e.g. `!sorry`.

##### URLs
In this field you must enter: `http://www.programmerexcuses.com/`

##### Script Enabled
This value must be `true`

##### Script
Now insert the complete code of the file `exusescript.js` into this field.

#### Save changes
Click on "SAVE CHANGES" and you're done.
