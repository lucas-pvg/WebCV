import { createContext } from 'react';
import { ProfileInterface } from '../data/profile';

export const ProfileContext = createContext<ProfileInterface>({} as ProfileInterface);
