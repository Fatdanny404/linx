import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ScanRecord {
  id: string;
  name: string;
  domain: string;
  ts: number;
  result: any;
}

interface HistoryStore {
  scans: ScanRecord[];
  addScan: (scan: Omit<ScanRecord, 'id' | 'ts'>) => void;
  clearHistory: () => void;
}

export const useScanHistory = create<HistoryStore>((set) => ({
  scans: [],
  addScan: (scan) =>
    set((state) => {
      const next = [
        { ...scan, id: Date.now().toString(), ts: Date.now() },
        ...state.scans,
      ].slice(0, 50); // keep last 50
      AsyncStorage.setItem('scan_history', JSON.stringify(next));
      return { scans: next };
    }),
  clearHistory: () => {
    AsyncStorage.removeItem('scan_history');
    set({ scans: [] });
  },
}));
