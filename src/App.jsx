import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import InitialAppDetails from './components/InitialAppDetails';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
      <Navbar />
      {currentStep === 1 && (
        <InitialAppDetails setCurrentStep={setCurrentStep} />
      )}
    </div>
  );
}
