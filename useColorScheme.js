import React, { useState } from 'react';
import { Button, useColorScheme } from 'react-native';

const UseColor = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const colorScheme = useColorScheme();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      title={isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
      onPress={toggleDarkMode}
    />
  );
};

export default UseColor;