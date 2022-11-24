export function useStorageToken() {
  const getToken: () => (string | null) = () => {
    const jsonValue = localStorage.getItem('mybinder-token');
    return jsonValue ? JSON.parse(jsonValue) : null;
  };

  const setToken = (value: string | object ) => {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem('mybinder-token', jsonValue);
  };

  const removeToken = () => {
    localStorage.removeItem('mybinder-token');
  };

  return { getToken, setToken, removeToken };
}