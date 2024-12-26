import { useState, useEffect } from 'react';

export const useIndexedDB = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const request = indexedDB.open('ChatDB', 1);

    request.onerror = (event) => {
      console.error('IndexedDB error:', event.target.error);
    };

    request.onsuccess = (event) => {
      setDb(event.target.result);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('messages')) {
        db.createObjectStore('messages', { keyPath: 'id', autoIncrement: true });
      }
      if (!db.objectStoreNames.contains('contacts')) {
        db.createObjectStore('contacts', { keyPath: 'id' });
      }
    };
  }, []);

  const saveMessage = async (message) => {
    if (!db) return;
    const transaction = db.transaction(['messages'], 'readwrite');
    const store = transaction.objectStore('messages');
    await store.add(message);
  };

  return { saveMessage };
};