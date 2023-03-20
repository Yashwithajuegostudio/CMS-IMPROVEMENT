export const readingDataFromLocalStorage = (field: string) => {
  return localStorage.getItem(field);
};

export const storingDataToLocalStorage = (field: string, value: string) => {
  localStorage.setItem(field, value);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export function useLocalStorage() {
  function localStorageUsage(method: string, key: string, value: string) {
    if (method === "GET") {
      return localStorage.getItem(key);
    } else if (method === "SET") {
      localStorage.setItem(key, value);
    } else {
      localStorage.clear();
    }
  }
  return [localStorageUsage];
}
