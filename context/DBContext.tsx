import { createContext, useEffect, useState, useContext } from 'react';
import * as SQLite from 'expo-sqlite';

type DBContextProps = {
  db: SQLite.SQLiteDatabase;
  dbIsLoading: boolean;
};

export const DBContext = createContext({} as DBContextProps);

export const DBProvider = ({ children }: any) => {
  const db = SQLite.openDatabase('base.db');
  const [dbIsLoading, setDBIsLoading] = useState(true);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS courses (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, grade INTEGER)'
      );
      setDBIsLoading(false);
    });
  }, []);

  return (
    <DBContext.Provider
      value={{
        db,
        dbIsLoading
      }}
    >
      {children}
    </DBContext.Provider>
  );
};

export const useDB = () => {
  return useContext(DBContext);
};
