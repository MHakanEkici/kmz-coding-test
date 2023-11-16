import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './style';
import {LoginDto, LoginResponse, UserData} from '../../services/types';
// import {useLoginQuery} from '../../services/AuthService';
import {useDispatch} from 'react-redux';
import AuthService from '../../services/AuthService';
import {setUserData} from '../../redux/AuthSlice';

export default function LoginScreen(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  // const [login, {isError, isLoading, error}] = useLoginQuery();

  const handleLogin = async () => {
    const requestData: LoginDto = {
      username: 'destek@akilliticaret.com',
      password: 'at253545',
    };

    try {
      setIsLoading(true);

      const loginResponse: LoginResponse = await AuthService.login(requestData);

      if (loginResponse && loginResponse?.data && loginResponse?.data.status) {
        const response: UserData = loginResponse.data;

        dispatch(setUserData(response));
        setIsLoading(false);
      } else {
        onLoginFailed();
      }
    } catch (e) {
      onLoginFailed();
      console.error('Login error:', e);
    }
  };

  function onLoginFailed() {
    Alert.alert('Giriş başarısız, lütfen bilgileriniz kontrol edin.');
    setIsLoading(false);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView style={styles.inner}>
        {isLoading ? (
          <ActivityIndicator size={40} color={'orange'} />
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Kullanıcı Adı"
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Parola"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLogin()}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
