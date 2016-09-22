# JSMidiParser
JS MIDI PARSER : Converts MIDI binary files to Javascript structured Objects

Project Name: JS Midi Parser
	Version: 2.0.1
	Author: colxi
	Author URI: http://www.colxi.info/
	Description: MIDIParser library reads .MID binary files, Base64 encoded MIDI Data,
	or UInt8 Arrays, and outputs as structured JS object.

	---     Usage Methods 	   ---
	------------------------------

	* OPTION 1 (MIDIParser.addListener)
	INPUT ELEMENT LISTENER : call MIDIParser.addListener(fileInputElement,callbacFunction) function, setting the
	Input File HTML element that will handle the file.mid opening, and callback function
	that will recieve the resulting Object formated, set of data.

	* OPTION 2 (MIDIParser.Uint8)
	Provide your own UInt8 Array to MIDIParser.Uint8(), to get an Object formated, set of data

	* OPTION 3 (MIDIParser.Base64)
	Provide a Base64 encoded Data to MIDIParser.Base64(), , to get an Object formated, set of data


	---  Output Object Specs   ---
	------------------------------

	Output_Object{
		formatType: 0|1|2, 					// Midi format type
		timeDivision: (int),				// song tempo (bpm)
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

+ MIDI Specs info :
MIDI Binary Encoding Specifications in https://github.com/colxi/JSMidiParser/wiki/MIDI-File-Format-Specifications


LICENCE
--------

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

