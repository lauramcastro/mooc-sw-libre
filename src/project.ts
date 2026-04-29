import { makeProject } from '@motion-canvas/core';

import audio from './audio/InspirationalMoment.mp3'; // Inspirational Moment (loop ver.1) by AudioCoffee -- https://freesound.org/s/709994/ -- License: Attribution NonCommercial 4.0
// import intro from './scenes/intro?scene';
// import explicacion from './scenes/explicacion?scene';
import corpo from './scenes/corpo?scene';

export default makeProject({
  // scenes: [intro, explicacion], // This was the test-drive (4 free software liberties)
  scenes: [corpo],
  audio: audio
});
