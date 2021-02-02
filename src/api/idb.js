const DB_NAME = 'Miniministy';
const DB_VERSION = 1;
const ENTRIES = 'entries';

let DB;

export default {
  async getDb() {
    return new Promise((resolve, reject) => {
      if(DB) { return resolve(DB); }
      console.log('OPENING  DB', DB);

      let request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = (e) => {
        console.log('Error opening db', e);
        reject('Error');
      };

      request.onsuccess = (e) => {
        DB = e.target.result;
        resolve(DB);
      };

      request.onupgradeneeded = (e) => {
        console.log('on upgrade needed');

        let db = e.target.result;

        db.createObjectStore(ENTRIES, {autoIncrement: true, keyPath: 'id'});
      }
    });
  },

  async clearAll() {
    let db = await this.getDb();
    
    return new Promise(resolve => {
      
      let trans = db.transaction([ENTRIES], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };

      let store = trans.objectStore('');
      store.clear();
    });
  },

  async getEntries() {
    let db = await this.getDb();

    return new Promise(resolve => {
      
      let trans = db.transaction([ENTRIES], 'readonly');
      trans.oncomplete = () => {
        resolve(EntryList);
      };

      let store = trans.objectStore(ENTRIES);
      let EntryList = [];

      store.openCursor().onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {
          EntryList.push(cursor.value);
          cursor.continue();
        }
      };
    });
  },

  async saveEntry(aEntry) {
    let db = await this.getDb();

    return new Promise(resolve => {
      let trans = db.transaction([ENTRIES], 'readwrite');
      trans.oncomplete = () => {
        resolve();
      };

      let store = trans.objectStore(ENTRIES);
      store.put(aEntry);
    });
  },

  async deleteEntry(aEntry) {
    let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction([ENTRIES],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore(ENTRIES);
			store.delete(aEntry.id);
		});	
  }
}
