import axios from 'axios';
import * as FileSystem from 'expo-file-system';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001';

export async function analyzeConnector({
  imageUri,
  domain,
}: {
  imageUri: string;
  domain: string;
}) {
  // Convert image to base64
  const base64 = await FileSystem.readAsStringAsync(imageUri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const response = await axios.post(
    `${API_URL}/api/analyze`,
    { image: base64, domain },
    { timeout: 60000 }
  );

  return response.data;
}
