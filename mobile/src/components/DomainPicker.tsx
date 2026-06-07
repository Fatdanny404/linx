import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function DomainPicker({
  value,
  onChange,
  domains,
}: {
  value: string;
  onChange: (id: string) => void;
  domains: { id: string; label: string }[];
}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {domains.map((d) => (
        <TouchableOpacity
          key={d.id}
          style={[styles.chip, value === d.id && styles.chipActive]}
          onPress={() => onChange(d.id)}
        >
          <Text style={[styles.chipText, value === d.id && styles.chipTextActive]}>
            {d.label}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 0 },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333333',
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  chipText: { color: '#888888', fontSize: 13 },
  chipTextActive: { color: '#0a0a0a', fontWeight: '600' },
});
