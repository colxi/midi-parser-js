
# Midi Parser Library (AKA JSMIDIPArser)
[![NoDependencies](https://img.shields.io/badge/dependencies-none-green.svg)](https://github.com/colxi/midi-parser-js)
[![Browser](https://img.shields.io/badge/browser-compatible-blue.svg)](https://github.com/colxi/midi-parser-js)
[![Node](https://img.shields.io/badge/node-compatible-brightgreen.svg)](https://www.npmjs.com/package/midi-parser-js)

MIDIParser is a Javascript **Binary MIDI files** reader, for Browsers and NODEjs. Converts MIDI binary files to Javascript Structured Objects, easier to iterate and interact with.

**It can also Parse ```BASE64``` encoded .mid data, or ```UINT8``` array data structures from a raw **.mid** binary.**

	Author URI: http://www.colxi.info/

## Package distribution networks :

In browser enviroment you can include this library using the jsdelivr CDN ...

```<script src='https://cdn.jsdelivr.net/gh/colxi/midi-parser-js@2.1.2/src/midi-parser.min.js'></script>```

If you are in the NodeJs enviroment, can install the package via:

```$ npm install midi-parser-js```



## Usage:

Midi-parser-js can proces MIDI data from a File input Element, or as an alternative you can provide manually the .mid file data, encoded with BASE64 or as a UINT8 Array. These are the usage options:



### Autodetected Input Type:
- **MIDIParser.parse( input [,CallbackFunction] )** : Accepts any of the supported Data Sources (```FileInput```|```uint8Array```|```base64String```) , and selects automatically the appropiate Parse method. When a FileInput element is provided, is required a callback to handle the return of the Midi Object.


### FileInput DOM Element Listener (Async) :

- **MIDIParser.addListener( FileInputElem , CallbackFunction )** :
Sets a listener on a ```FileInput``` Element,  that gets executed when the user selects a file. The listener automatically Parsess the attached **.mid** file and calls the provided ```CallbackFunction``` with the resulting object as first argument. ( **_Note: ONLY IN BROWSERS!_** )

### Direct Encoded Data Parsing  (Sync) :

- **MIDIParser.Uint8( uint8Array )** : Accepts an uint8 Array as input. Returns the formatted MIDI object.

- **MIDIParser.Base64( base64String )** : Accepts a  Base64 String. Returns the formatted MIDI object.


## Returned Object Structure :


```javascript
	Output_Object{
		formatType: 0|1|2, 					// Midi format type
		timeDivision: (int),					// song tempo (bpm)
		tracks: (int), 						// total tracks count
		track: Array[
			[0]: Object{					// TRACK 1!
				event: Array[				// Midi events in track 1
					[0] : Object{			// EVENT 1
						data: (string),
						deltaTime: (int),
						metaType: (int),
						type: (int),
					},
					[1] : Object{...}		// EVENT 2
					[2] : Object{...}		// EVENT 3
					...
				]
			},
			[1] : Object{...}
			[2] : Object{...}
			...
		]
	}
```
Data from **Event 12** of **Track 2** could be easilly readed with:
```javascript
	Output_Object.track[2].event[12].data;
```

---
## MIDI File Format Specifications :

MIDI Binary Encoding Specifications in https://github.com/colxi/midi-parser-js/wiki/MIDI-File-Format-Specifications

