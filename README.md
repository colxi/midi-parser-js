# Midi Parser Library (AKA JSMIDIPArser)
 MIDI PARSER is Binary MIDI files reader Javascript library for browsers. Converts MIDI binary files to Javascript structured Objects. Also can convert BASE64 encoded .mid data, or UINT8 array data structures from a raw .mid binary.

	Author URI: http://www.colxi.info/
	Installation : npm install midi-parser-js

# Usage: 
	
	Midi-parser-js can proces MIDI data from a File input Element, or as an alternative you can provide manually the .mid file data, encoded with BASE64 or as a UINT8 Array. These are the usage options: 
	
	## DOM ELEMENT LISTENER (Async):
	MIDIParser.addListener( INPUTElem , CallbackFunction) :
	INPUT ELEMENT LISTENER : call MIDIParser.addListener(fileInputElement,callbacFunction) function, setting the
	Input File HTML element that will handle the file.mid opening, and callback function
	that will recieve the resulting Object formated, set of data (Meta , Tracks & MIDI Events).

	## MANUAL INPUT  (Sync) : 
	MIDIParser.Uint8( uint8Array)
	MIDIParser.Base64( base64String)
	Provide your own UInt8 Array or base64 String to the corresponding method, and  get an Object formated, set of data (Meta , Tracks & MIDI Events)



# Output Object Structure  

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

Data from Event 12 of Track 2 could be easilly readed with:
Output_Object.track[2].event[12].data;

-------------------------------------------------------------------------------

# MIDI File Format Specifications :
MIDI Binary Encoding Specifications in https://github.com/colxi/midi-parser-js/wiki/MIDI-File-Format-Specifications
