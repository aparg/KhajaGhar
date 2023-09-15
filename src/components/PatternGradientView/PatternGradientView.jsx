import withBackground from '../hocs/withBackground';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ImageBackground, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {BACKGROUND} from '../../images/images';
import {COLORS} from '../../Colors/Colors';

const PatternGradientView = ({children}) => {
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};

export default withBackground(PatternGradientView);

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 15,
    height: 200,
    width: '100%',
  },
  patternImage: {
    position: 'absolute',
    zIndex: 10,
  },
});
