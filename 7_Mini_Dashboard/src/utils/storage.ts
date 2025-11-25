export const get = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  try {
    return JSON.parse(item) as T;
  } catch (error) {
    return null;
  }
};

export const set = <T>(key: string, value: T): void => {
  const stringifiedValue = JSON.stringify(value);
  try {
    localStorage.setItem(key, stringifiedValue);
  } catch (error) {
    console.log(error);
  }
};
