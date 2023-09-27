import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LinkShortener = () => {
  const [originalLink, setOriginalLink] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');

  const shortenLink = async () => {
    if (originalLink) {
      
      const randomSuffix = Math.random().toString(36).substring(7);
      const shortLink = `http://short.link/${randomSuffix}`;
      setShortenedLink(shortLink);
      Clipboard.setString(shortLink);
      await AsyncStorage.setItem('shortenedLink', shortLink);
      alert('Link encurtado e copiado para a área de transferência com sucesso!');
    } else {
      alert('Por favor, insira um URL válido.');
    }
  };

  return (
    <View>
      <Text>Insira o URL original:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'red', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(text) => setOriginalLink(text)}
        value={originalLink}
        placeholder="https://example.com"
      />
      <Button title="Encurtar URL" onPress={shortenLink} />
      {shortenedLink && (
        <View>
          <Text>Link Encurtado:</Text>
          <Text>{shortenedLink}</Text>
        </View>
      )}
    </View>
  );
};

export default LinkShortener;
