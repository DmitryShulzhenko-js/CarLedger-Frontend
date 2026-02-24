export const login = async (username, password) => {
  const res = await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.msg || 'Api frontend --> Login failed');
  }

  localStorage.setItem('token', data.token);

  return data.user;
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');

  const res = await fetch('http://localhost:5000/profile', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (res.status == 401) {
    localStorage.removeItem('token');
    throw new Error('UNAUTHORIZED');
  }

  if (!res.ok) {
    throw new Error('Failed to fetch profile');
  }

  return await res.json();
};

export const logout = async () => {

  console.log('НАЖАЛИ КНОПКУ')

  const token = localStorage.getItem('token');

  const res = await fetch('http://localhost:5000/profile', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (res.status == 401) {
    localStorage.removeItem('token');
    throw new Error('UNAUTHORIZED');
  }

  if (!res.ok) {
    throw new Error('Failed to fetch profile');
  }

  return await res.json();
};