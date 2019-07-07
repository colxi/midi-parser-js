// import midi parser (will create a reference in the global scope)
import './main.js';

// identify the global scope
let _global = typeof window === 'object' && window.self === window && window ||
            typeof self === 'object' && self.self === self && self ||
            typeof global === 'object' && global.global === global && global;

// retrieve a copy of the MidiParser reference and store it
let _MidiParser = _global.MidiParser;

// delete the global scope reference
delete _global.MidiParser;

// export the stored MidiParser reference
export {_MidiParser as MidiParser};