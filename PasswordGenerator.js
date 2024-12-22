import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';

const generatePassword = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const copyToClipboard = () => {
    if (password) {
      Clipboard.setStringAsync(password); // Panoya şifreyi kopyala
      alert('Şifre panoya kopyalandı!'); // Kullanıcıya bir bildirim
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Şifre Üretici</Text>
      {password ? (
        <View style={styles.passwordBox}>
          <Text style={styles.passwordText}>{password}</Text>
        </View>
      ) : (
        <Text style={styles.placeholderText}>Şifre üretmek için butona basın</Text>
      )}
      
      {/* Kopyala Butonu Şifre Üret Butonunun Üstünde */}
      {password ? (
        <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
          <Text style={styles.copyButtonText}>Kopyala</Text>
        </TouchableOpacity>
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setPassword(generatePassword())}
      >
        <Text style={styles.buttonText}>Şifre Üret</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1c4fd', // Degrade başlıyor
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff6f61', // Turuncu ton
    marginBottom: 20,
  },
  passwordBox: {
    backgroundColor: '#f9f9f9', // Hafif beyaz-gri
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  passwordText: {
    fontSize: 22,
    color: '#333333', // Siyah ton
    fontWeight: 'bold',
  },
  placeholderText: {
    fontSize: 18,
    color: '#555555',
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff6f61', // Canlı turuncu
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginTop: 20, // Bu satır ile boşluk ekledik
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  copyButton: {
    backgroundColor: '#4CAF50', // Yeşil renk
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  copyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PasswordGenerator;
