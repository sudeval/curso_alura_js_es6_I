var stores = ['negociacoes'];
var version = 4;
var dbName = 'aluraframe';

class ConnectionFactory {

    constructor() {
        throw new Error('nao é possível instanciar a connection factory');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {
            
                // apagando as stores criadas
                stores.forEach(store => {
                    if (e.target.result.objectStoreNames.contains(store)) {
                        e.target.result.deleteObjectStore(store);
                    }

                    e.target.result.createObjectStore(store, {autoIncrement: true})
                })
            };

            openRequest.onsuccess = e => {
            };

            openRequest.onerror = e => {
            };
        })
    }
}