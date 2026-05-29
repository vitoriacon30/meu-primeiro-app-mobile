import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  
  const aoClicar = () => {
    Alert.alert('Sucesso!', 'O Expo Go e o VS Code estão integrados perfeitamente!');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.cartao}>
        <Text style={styles.titulo}>Olá, Mundo! 🚀</Text>
        <Text style={styles.subtitulo}>Curso Técnico de Desenvolvimento de Sistemas</Text>
        <Text style={styles.descricao}>
          Este é o nosso primeiro aplicativo mobile criado com React Native e Expo!
        </Text>
        
        <TouchableOpacity style={styles.botao} onPress={aoClicar}>
          <Text style={styles.textoBotao}>Clique Aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cartao: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4338ca',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  descricao: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 24, // <-- Corrigido aqui!
    marginBottom: 24,
  },
  botao: {
    backgroundColor: '#6366f1',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});