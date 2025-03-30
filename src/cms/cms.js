import CMS from 'decap-cms-app';
import uploadcare from "decap-cms-media-library-uploadcare";

CMS.registerMediaLibrary(uploadcare);
// In your React component or main application file
console.log('All environment variables:', process.env);

