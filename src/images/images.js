const imageFolder = '../../assets/images';
const iconsImgPath = `${imageFolder}/icons`;
const logoImgPath = `${imageFolder}/Logo`;
const paymentImgPath = `${imageFolder}/payment`;
const socialsImgPath = `${imageFolder}/socials`;
const illustrationsImgPath = `${imageFolder}/illustrations`;
const backgroundImgPath = `${imageFolder}/background`;

//ICONS
export const ICONS = {
  back: require(`${iconsImgPath}/back.png`),
  message: require(`${iconsImgPath}/message.png`),
  emailBold: require(`${iconsImgPath}/email-bold.png`),
  email: require(`${iconsImgPath}/email.png`),
  location: require(`${iconsImgPath}/location.png`),
  profile: require(`${iconsImgPath}/profile.png`),
  selectFromGallery: require(`${iconsImgPath}/select-from-gallery.png`),
  tick: require(`${iconsImgPath}/tick.png`),
  password: require(`${iconsImgPath}/password.png`),
  openCamera: require(`${iconsImgPath}/open-camera.png`),
  congrats: require(`${iconsImgPath}/congrats.png`),
  passwordShown: require(`${iconsImgPath}/password-shown.png`),
  passwordHide: require(`${iconsImgPath}/password-hidden.png`),
  search: require(`${iconsImgPath}/search.png`),
  filter: require(`${iconsImgPath}/filter.png`),
};

//LOGO
export const LOGO = {logo: require(`${logoImgPath}/Logo.png`)};

//SOCIALS
export const SOCIALS = {
  facebook: require(`${socialsImgPath}/facebook.png`),
  google: require(`${socialsImgPath}/google.png`),
};

//PAYMENT
export const PAYMENT = {
  payoneer: require(`${paymentImgPath}/payoneer.png`),
  paypal: require(`${paymentImgPath}/paypal.png`),
  visa: require(`${paymentImgPath}/visa.png`),
};

//ILLUSTRATIONS
export const ILLUSTRATIONS = {
  entryPageIllustration1: require(`${illustrationsImgPath}/entry-page-illustration1.png`),
  entryPageIllustration2: require(`${illustrationsImgPath}/entry-page-illustration2.png`),
  icecream: require(`${illustrationsImgPath}/icecream.png`),
};

export const BACKGROUND = {
  background: require(`${backgroundImgPath}/background-pattern.png`),
};
