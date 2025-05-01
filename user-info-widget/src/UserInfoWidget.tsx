import React from 'react';
import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Store {
  user: User;
  setUser: (user: User) => void;
}

const useStore = create<Store>((set) => ({
  user: { name: '', email: '', phone: '' },
  setUser: (user) => set({ user })
}));

interface WidgetProps {
  style?: React.CSSProperties;
}

const UserInfoWidget: React.FC<WidgetProps> = ({ style }) => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, ...style }}>
      <h3>User Info Widget</h3>
      {(['name', 'email', 'phone'] as (keyof User)[]).map((field) => (
        <p key={field}>
          <label>
            {field.charAt(0).toUpperCase() + field.slice(1)}:{' '}
            <input name={field} value={user[field]} onChange={handleChange} />
          </label>
        </p>
      ))}
    </div>
  );
};

export default UserInfoWidget;
