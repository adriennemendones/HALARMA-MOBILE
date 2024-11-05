import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 149,
    left: 70,
  },
  logo: {
    width: width * 0.5, // 50% of screen width
    height: height * 0.2, // 20% of screen height
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    width: '90%',
    maxWidth: 300,
    marginBottom: height * 0.13, 
  },
  input: {
    height: height * 0.06, // 6% of screen height for input height
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: height * 0.03, // 2% of screen height for bottom margin
    paddingHorizontal: width * 0.04, // 4% of screen width for horizontal padding
    borderRadius: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  loginButton: {
    backgroundColor: '#990000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  footerLinks: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#999',
  },
  link: {
    color: '#990000',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default LoginStyles;
