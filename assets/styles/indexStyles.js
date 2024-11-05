import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0E1E0',
    paddingHorizontal: width * 0.05, // 5% of screen width for padding
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05, // 5% of screen height for top margin
  },
  bellImage: {
    width: width * 0.8, // 80% of screen width
    height: height * 0.15, // 15% of screen height
    marginBottom: height * 0.02, // 2% of screen height for bottom margin
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05, // 5% of screen width for padding
  },
  description: {
    fontSize: width * 0.04, // Font size based on screen width
    textAlign: 'justify',
    color: '#4A4A4A',
    lineHeight: width * 0.05, // Line height based on screen width
    marginHorizontal: width * 0.02, // 2% of screen width for horizontal margin
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: height * 0.1, // 10% of screen height for bottom margin
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: height * 0.02, // 2% of screen height for vertical padding
    paddingHorizontal: width * 0.25, // 25% of screen width for horizontal padding
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: width * 0.045, // Font size based on screen width
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default styles;
