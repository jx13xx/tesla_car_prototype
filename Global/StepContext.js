import React from 'react';

const StepProviderContext = React.createContext();

const StepProvider = ({children}) => {
  const [step, setStep] = React.useState(0);
  const [userSelectedCar, setUserSelectedCar] = React.useState();
  const [totalPrice, setTotalPrice] = React.useState();
  const [carModel, setCarModel] = React.useState();
  const [currency, setCurrency] = React.useState('AED');
  const [selectedCarImage, setSelectedCarImage] = React.useState();
  const [specificationPrice, setSpecificationPrice] = React.useState(0);
  const [interiorPrice, setInteriorPrice] = React.useState(0);
  const [exteriorPrice, setExteriorPrice] = React.useState(0);
  const [autoPilotPrice, setAutoPilotPrice] = React.useState(0);

  return (
    <StepProviderContext.Provider
      value={{
        step,
        setStep,
        carModel,
        setCarModel,
        userSelectedCar,
        setUserSelectedCar,
        totalPrice,
        currency,
        setCurrency,
        setTotalPrice,
        selectedCarImage,
        setSelectedCarImage,
        specificationPrice,
        setSpecificationPrice,
        interiorPrice,
        setInteriorPrice,
        exteriorPrice,
        setExteriorPrice,
        autoPilotPrice,
        setAutoPilotPrice,
      }}>
      {children}
    </StepProviderContext.Provider>
  );
};

export {StepProviderContext, StepProvider};
