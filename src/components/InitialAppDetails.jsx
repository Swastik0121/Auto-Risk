import { useState } from 'react';
export default function InitialAppDetails({ setCurrentStep }) {
  const [appInfoForm, setAppInfoForm] = useState({
    appName: '',
    appDescription: '',
    hostedOn: 'AWS',
    isAIUsed: 'false',
    architectureDiagram: null,
    dataFlowDiagram: null,
  });

  const [applicationDetailsList, setApplicationDetailsList] = useState([]);

  function handleChange(e) {
    const { name, value, type, files } = e.target;

    const finalValue = type === 'file' ? files[0] : value;

    setAppInfoForm((AppInfo) => ({ ...AppInfo, [name]: finalValue }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(appInfoForm);
    setApplicationDetailsList((prevList) => [...prevList, appInfoForm]);

    // wiping the slate clean
    setAppInfoForm({
      appName: '',
      appDescription: '',
      hostedOn: 'AWS',
      isAIUsed: 'false',
      architectureDiagram: null,
      dataFlowDiagram: null,
    });

    // next step
    // setCurrentStep(2);
  }

  console.log(applicationDetailsList);

  return (
    <div className='page-container'>
      <form className='form-card' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Application Name </label>
          <input
            name='appName'
            type='text'
            value={appInfoForm.appName}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Application Description</label>
          <input
            name='appDescription'
            type='text'
            value={appInfoForm.appDescription}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Hosted On:</label>
          <select
            name='hostedOn'
            value={appInfoForm.hostedOn}
            onChange={handleChange}
          >
            <option value='AWS'>AWS</option>
            <option value='Vercel'>Vercel</option>
            <option value='onPremise'>On-Premise</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Is AI Used ?</label>
          <select
            name='isAIUsed'
            value={appInfoForm.isAIUsed}
            onChange={handleChange}
          >
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='architectureInput'>Architecture Diagram</label>
          <label htmlFor='architectureInput' className='file-upload-zone'>
            <span>Click to Upload Architecture Diagram (PNG, JPG, PDF)</span>
          </label>

          <input
            id='architectureInput'
            name='architectureDiagram'
            type='file'
            accept='image/*,.pdf'
            onChange={handleChange}
            style={{ display: 'none' }} // To hide the default button
          />
        </div>

        <div className='form-group'>
          <label htmlFor='dataFlowInput'>Architecture Diagram</label>
          <label htmlFor='dataFlowInput' className='file-upload-zone'>
            <span>Click to Upload Architecture Diagram (PNG, JPG, PDF)</span>
          </label>

          <input
            id='dataFlowInput'
            name='DataFlowDiagram'
            type='file'
            accept='image/*,.pdf'
            onChange={handleChange}
            style={{ display: 'none' }} // To hide the default button
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
