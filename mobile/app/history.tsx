import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { useScanHistory } from '@/src/store/history';

export default function HistoryScreen() {
  const { scans, clearHistory } = useScanHistory();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Scan History',
          headerRight: () =>
            scans.length > 0 ? (
              <TouchableOpacity onPress={clearHistory}>
                <Text style={styles.clearText}>Clear</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
      {scans.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No scans yet.</Text>
        </View>
      ) : (
        <FlatList
          data={scans}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16, gap: 12 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardSub}>{item.domain} · {new Date(item.ts).toLocaleDateString()}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a' },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { color: '#444444', fontSize: 15 },
  card: {
    backgroundColor: '#111111',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#222222',
  },
  cardTitle: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  cardSub: { color: '#666666', fontSize: 13, marginTop: 4 },
  clearText: { color: '#ff4444', marginRight: 4, fontSize: 15 },
});
