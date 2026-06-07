import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LINX</Text>
      <Text style={styles.tagline}>Point. Shoot. Identify.</Text>

      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => router.push('/scan')}
      >
        <Text style={styles.scanButtonText}>Scan a Connector</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => router.push('/history')}
      >
        <Text style={styles.historyButtonText}>Scan History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  logo: {
    fontSize: 56,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 32,
  },
  scanButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#0a0a0a',
    fontSize: 18,
    fontWeight: '700',
  },
  historyButton: {
    borderWidth: 1,
    borderColor: '#333333',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  historyButtonText: {
    color: '#888888',
    fontSize: 16,
  },
});
