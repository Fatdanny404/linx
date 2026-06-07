import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';
import { analyzeConnector } from '@/src/api/analyze';
import { DOMAINS } from '@/src/constants/domains';
import ResultCard from '@/src/components/ResultCard';
import DomainPicker from '@/src/components/DomainPicker';

export default function ScanScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [domain, setDomain] = useState<string>('auto');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function pickImage() {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
      base64: true,
    });
    if (!res.canceled) {
      setImage(res.assets[0].uri);
      setResult(null);
    }
  }

  async function takePhoto() {
    const res = await ImagePicker.launchCameraAsync({
      quality: 0.8,
      base64: true,
    });
    if (!res.canceled) {
      setImage(res.assets[0].uri);
      setResult(null);
    }
  }

  async function runAnalysis() {
    if (!image) return;
    setLoading(true);
    try {
      const data = await analyzeConnector({ imageUri: image, domain });
      setResult(data);
    } catch (e: any) {
      Alert.alert('Error', e.message || 'Analysis failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Stack.Screen options={{ title: 'Scan Connector' }} />

      <DomainPicker value={domain} onChange={setDomain} domains={DOMAINS} />

      <View style={styles.imageArea}>
        {image ? (
          <Image source={{ uri: image }} style={styles.preview} />
        ) : (
          <Text style={styles.placeholder}>No image selected</Text>
        )}
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={takePhoto}>
          <Text style={styles.btnText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={pickImage}>
          <Text style={styles.btnText}>Library</Text>
        </TouchableOpacity>
      </View>

      {image && !loading && (
        <TouchableOpacity style={styles.analyzeBtn} onPress={runAnalysis}>
          <Text style={styles.analyzeBtnText}>Identify Connector</Text>
        </TouchableOpacity>
      )}

      {loading && <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 24 }} />}

      {result && <ResultCard result={result} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  content: { padding: 16, gap: 16 },
  imageArea: {
    width: '100%',
    height: 260,
    backgroundColor: '#111111',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  preview: { width: '100%', height: '100%', resizeMode: 'cover' },
  placeholder: { color: '#444444', fontSize: 14 },
  row: { flexDirection: 'row', gap: 12 },
  btn: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333333',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: '#ffffff', fontSize: 15, fontWeight: '600' },
  analyzeBtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  analyzeBtnText: { color: '#0a0a0a', fontSize: 17, fontWeight: '700' },
});
