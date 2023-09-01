import React, { createContext, useState, useContext } from 'react';

const ProfileContext = createContext();

export const useProfileContext = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    gender: '',
  });

  const [goal, setGoal] = useState({
    type: '',
    target: ''
  })

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const updateGoal = (goal) => {
    setGoal(goal);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, goal, updateGoal }}>
      {children}
    </ProfileContext.Provider>
  );
};
