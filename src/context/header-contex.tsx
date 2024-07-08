import { FC, createContext, useContext, useState } from 'react';

interface HeaderContextProps {
  setSearchTerm: (value: string) => void;
  searchTerm: string;
}

const HeaderContext = createContext<HeaderContextProps>({
  setSearchTerm: () => {},
  searchTerm: '',
});

export const HeaderProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <HeaderContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = (): HeaderContextProps =>
  useContext(HeaderContext);
