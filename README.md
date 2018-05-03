![logo](https://cdn.rawgit.com/colxi/midi-parser-js/7e083d58/logo.png)

# MidiParser.js 
[![NoDependencies](https://img.shields.io/badge/dependencies-none-green.svg)](https://github.com/colxi/midi-parser-js)
[![Browser](https://img.shields.io/badge/browser-compatible-blue.svg)](https://github.com/colxi/midi-parser-js)
[![Node](https://img.shields.io/badge/node-compatible-brightgreen.svg)](https://www.npmjs.com/package/midi-parser-js)

MidiParser is a Javascript **Binary MIDI file** reader, for Browsers and Node, wich converts the binary data structures  to **JSON Objects**, much easier to iterate and interact with.

> **It accepts ```BASE64``` encoded Midi data, or the resulting ```UINT8``` arrayBuffer, obtained after reading a raw  .mid binary.  It also, can automatically handle files selected with a  ```FileInput Element``` in the browser.** 


## Syntax:


> MidiParser.parse( input [, callback] );

- **input** : Accepts any of the supported Data Sources (```FileInputElement```|```uint8Array```|```base64String```)

- **callback** : Function to handle the parsed data. Only required when input is a FileInputElement. 
 


---

### Handle Custom messages ( sysEx, non-standard...)

By default, the library ignores the sysEx, and non-standard messages, simply converting their values to integers (when possible).
However you can provide a custom hook function to be executed when any non-standard message is found, and process it by your own, returning the resulting value.



> MidiParser.customInterpreter = function( msgType, arrayBuffer, metaEventLength){  /** your code ** / }

- **msgType** : Hex value of the message type
 
- **arrayBuffer** : dataview of the midi data. You have to extract your value/s from it, moving the pointer as needed.

- **metaEventLength** : When is >0 you received a metamessage

> If you want the default action to be executed, return **false**


## Parsed Data Structure :


```javascript
Output_Object{
  formatType: 0|1|2, 			// Midi format type
  timeDivision: (int),			// song tempo (bpm)
  tracks: (int), 				// total tracks count
  track: Array[
  	 [0]: Object{				// TRACK 1!
  	   event: Array[		    // Midi events in track 1
  	     [0] : Object{			// EVENT 1
  		   data: (string),
  		   deltaTime: (int),
  		   metaType: (int),
  		   type: (int),
  		 },
         [1] : Object{...},	    // EVENT 2
         [2] : Object{...},		// EVENT 3
  		 // ...
  	  ]
    },
  	[1] : Object{...},         // TRACK 2
  	[2] : Object{...},         // TRACK 3
  	// ...
  ]
}
```
The data from **Event 12** of **Track 2** could be easilly readed with:
```javascript
Output_Object.track[2].event[12].data;
```
 
## Installation :

The following methods are available to use MidiParser.js :


- Include this library in your HTML head using the CDN :

> https://gitcdn.link/repo/colxi/midi-parser-js/master/src/midi-parser.js

- Use NPM to install the package :

> $ npm install midi-parser-js

- Clone the repository from GITHUB :

> $ git clone https://github.com/colxi/midi-parser-js.git



## MIDI File Format Specifications :

MIDI Binary Encoding Specifications in https://github.com/colxi/midi-parser-js/wiki/MIDI-File-Format-Specifications

