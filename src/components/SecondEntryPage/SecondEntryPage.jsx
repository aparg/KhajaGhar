import EntryPage from '../Layouts/EntryPage/EntryPage';
import {ILLUSTRATIONS} from '../../images/images';
const SecondEntryPage = ({navigation}) => {
  return (
    <EntryPage
      welcomeNoteLine1="Food Ninja is Where Your"
      welcomeNoteLine2="Comfort Food Lives"
      messageLine1="Enjoy a fast and smooth food delivery at"
      messageLine2="your doorstep"
      imagePath={ILLUSTRATIONS.entryPageIllustration1}
      pressed={() => navigation.navigate('LoginPage')}
    />
  );
};

export default SecondEntryPage;
