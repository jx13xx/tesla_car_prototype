import React from 'react';

const StepProviderContext = React.createContext();

const StepProvider = ({children}) => {
  const [step, setStep] = React.useState(0);

  return (
    <StepProviderContext.Provider value={{step, setStep}}>
      {children}
    </StepProviderContext.Provider>
  );
};
