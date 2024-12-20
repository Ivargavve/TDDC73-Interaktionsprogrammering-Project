import React, { useState } from 'react';
import styles from './passwordStrMeter.module.css';

const PasswordStrengthMeter = ({ onPasswordChange }) => {
  const [password, setPassword] = useState('');

  const calculateStrength = (password) => {
    if (!password) return -1;

    let strength = 0;
    if (password.length > 8) strength++; // Längd > 8 tecken
    if (/[A-Z]/.test(password)) strength++; // Innehåller stora bokstäver
    if (/[0-9]/.test(password)) strength++; // Innehåller siffror
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Innehåller specialtecken
    return strength;
  };

  const strength = calculateStrength(password);

  const getStrengthLabel = () => {
    const labels = ['No Input', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
    return labels[strength + 1]; // +1 för att hantera -1
  };

  const widthPercentage = Math.min(100, Math.max(0, ((strength + 1) / 5) * 100));

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    onPasswordChange(newPassword); 
  };

  return (
    <div className={styles.container}>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
        className={styles.input}
      />
      <div className={styles.strengthBar}>
        <div
          className={`${styles.strength} ${styles[`level-${strength}`]}`} // level-0, level-1, level-2, level-3, level-4, level-5
          style={{ width: `${widthPercentage}%` }} // 0%, 25%, 50%, 75%, 100%
        ></div>
      </div>
      <p className={styles.label}>{getStrengthLabel()}</p>
    </div>
  );
};

export default PasswordStrengthMeter;
