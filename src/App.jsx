import { useState } from 'react';

export default function App() {
  return (
    <div>
      <InitialAppDetails />
    </div>
  );
}

function InitialAppDetails() {
  const [appInfoForm, setAppInfoForm] = useState({
    appName: '',
    appDescription: '',
    hostedOn: 'AWS',
    isAIUsed: 'false',
  });

  const [applicationDetailsList, setApplicationDetailsList] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setAppInfoForm((AppInfo) => ({ ...AppInfo, [name]: value }));
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
    });
  }

  console.log(applicationDetailsList);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Application Name</label>
        <input
          name='appName'
          type='text'
          value={appInfoForm.appName}
          onChange={handleChange}
        />

        <label>Application Description</label>
        <input
          name='appDescription'
          type='text'
          value={appInfoForm.appDescription}
          onChange={handleChange}
        />

        <label>
          Hosted On:
          <select
            name='hostedOn'
            value={appInfoForm.hostedOn}
            onChange={handleChange}
          >
            <option value='AWS'>AWS</option>
            <option value='Vercel'>Vercel</option>
            <option value='onPremise'>On-Premise</option>
          </select>
        </label>

        <label>
          Is AI Used ?
          <select
            name='isAIUsed'
            value={appInfoForm.isAIUsed}
            onChange={handleChange}
          >
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
