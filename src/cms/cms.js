import CMS from 'decap-cms-app';
import uploadcare from "decap-cms-media-library-uploadcare";

const opt = { publicKey: process.env.GATSBY_UPLOAD_CARE_API };
CMS.registerMediaLibrary(uploadcare, opt);
console.log({opt});

