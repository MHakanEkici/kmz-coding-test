import React, {useCallback, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './style';
import {LoginDto, LoginResponse, UserData} from '../../services/types';
import {useDispatch} from 'react-redux';
import AuthService from '../../services/AuthService';
import {setUserData} from '../../redux/AuthSlice';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

export default function LoginScreen(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const requestData: LoginDto = {
      //TODO
      username: username,
      password: password,
    };
    try {
      setIsLoading(true);
      const loginResponse: LoginResponse = await AuthService.login(requestData);

      if (loginResponse && loginResponse?.data && loginResponse?.data.status) {
        const response: UserData = loginResponse.data;
        dispatch(
          setUserData({...response, data: {...response.data, userId: 675}}), //Random Test UserId
        );
        setIsLoading(false);
      } else {
        onLoginFailed();
      }
    } catch (e) {
      onLoginFailed();
      console.error('Login error:', e);
    }
  };

  const onLoginFailed = useCallback(() => {
    Alert.alert('Giriş başarısız, lütfen bilgileriniz kontrol edin.');
    setIsLoading(false);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <SafeAreaView style={styles.inner}>
        {isLoading ? (
          <ActivityIndicator size={40} color={'orange'} />
        ) : (
          <>
            <CustomInput
              placeholder="Kullanıcı Adı"
              value={username}
              onChangeText={text => setUsername(text)}
              autoCapitalize="none"
            />
            <CustomInput
              placeholder="Parola"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            <CustomButton onPress={handleLogin} label={'Giriş Yap'} />
          </>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
