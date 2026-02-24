import { useEffect, useState } from 'react';
import { getProfile } from '../api/auth';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        console.log('Profile fetched from API:', profile);
        setUser(profile);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  if (error) return <div>{error}</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>User ID: {user.id}</p>
    </div>
  );
}