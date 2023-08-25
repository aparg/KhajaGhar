import EntryPage from '../Layouts/EntryPage/EntryPage';

const FirstEntryPage = ({navigation}) => {
  return (
    <EntryPage
      welcomeNoteLine1="Find your Comfort"
      welcomeNoteLine2="Food here"
      messageLine1="Here You Can find a chef or dish for every"
      messageLine2="taste and color. Enjoy!"
      imagePath={require('../../../assets/images/EntryPageIllustration1.png')}
      pressed={() => navigation.navigate('SecondEntryPage')}
    />
  );
};

export default FirstEntryPage;
