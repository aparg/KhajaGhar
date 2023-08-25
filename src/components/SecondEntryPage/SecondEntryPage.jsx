import EntryPage from '../Layouts/EntryPage/EntryPage';

const SecondEntryPage = ({navigation}) => {
  return (
    <EntryPage
      welcomeNoteLine1="Food Ninja is Where Your"
      welcomeNoteLine2="Comfort Food Lives"
      messageLine1="Enjoy a fast and smooth food delivery at"
      messageLine2="your doorstep"
      imagePath={require('../../../assets/images/EntryPageIllustration2.png')}
      pressed={() => navigation.navigate('LoginPage')}
    />
  );
};

export default SecondEntryPage;
