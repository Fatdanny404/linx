import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ResultCard({ result }: { result: any }) {
  if (!result) return null;

  const safetyColors: Record<string, string> = {
    critical: '#ff3333',
    warning: '#ffaa00',
    info: '#3399ff',
  };

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{result.name || 'Unknown Connector'}</Text>
      {result.standard && <Text style={styles.standard}>{result.standard}</Text>}

      {result.safety_alerts?.map((alert: any, i: number) => (
        <View
          key={i}
          style={[styles.alert, { borderLeftColor: safetyColors[alert.level] || '#666' }]}
        >
          <Text style={[styles.alertLevel, { color: safetyColors[alert.level] }]}>
            {alert.level?.toUpperCase()}
          </Text>
          <Text style={styles.alertMsg}>{alert.message}</Text>
        </View>
      ))}

      {result.specs && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Specs</Text>
          {Object.entries(result.specs).map(([k, v]) => (
            <Text key={k} style={styles.specRow}>
              <Text style={styles.specKey}>{k}: </Text>
              <Text style={styles.specVal}>{String(v)}</Text>
            </Text>
          ))}
        </View>
      )}

      {result.notes && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.notes}>{result.notes}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111111',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#222222',
    gap: 12,
  },
  name: { color: '#ffffff', fontSize: 22, fontWeight: '700' },
  standard: { color: '#888888', fontSize: 14 },
  alert: {
    borderLeftWidth: 3,
    paddingLeft: 10,
    paddingVertical: 6,
    backgroundColor: '#1a1a1a',
    borderRadius: 4,
  },
  alertLevel: { fontSize: 11, fontWeight: '700', letterSpacing: 1 },
  alertMsg: { color: '#cccccc', fontSize: 14, marginTop: 2 },
  section: { gap: 6 },
  sectionTitle: { color: '#666666', fontSize: 12, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1 },
  specRow: { fontSize: 14 },
  specKey: { color: '#888888' },
  specVal: { color: '#ffffff' },
  notes: { color: '#aaaaaa', fontSize: 14, lineHeight: 20 },
});
