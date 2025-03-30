import CMS from 'decap-cms-app';
import uploadcare from "decap-cms-media-library-uploadcare";

CMS.registerMediaLibrary(uploadcare);
console.log('UPLOAD_CARE_API:', process.env.GATSBY_UPLOAD_CARE_API);

