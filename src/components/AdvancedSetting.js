import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const AdvancedSetting = () => {
  const [negativeMarking, setNegativeMarking] = useState(0);
  const [easyMarks, setEasyMarks] = useState('');
  const [mediumMarks, setMediumMarks] = useState('');
  const [hardMarks, setHardMarks] = useState('');
  const [passingScore, setPassingScore] = useState('');
  const [registrationForm, setRegistrationForm] = useState(false);
  const [captureImage, setCaptureImage] = useState(false);
  const [captureImageInterval, setCaptureImageInterval] = useState('');
  const [instructions, setInstructions] = useState('Please read the following instructions carefully before proceeding with the exam:\n1. Answer all questions to the best of your ability.\n2. Make sure to submit your answers before the time runs out.\n3. Double-check your answers before submission.\n4. Good luck!');

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };
  const handleNeagtiveMarking = (e) => {
    const value = e.target.value
    if (value < 0)
      setNegativeMarking(0);
    else if (value > 100)
      setNegativeMarking(100)
    else
      setNegativeMarking(value)
  }
  const handlePassingScore = (e) => {
    const value = e.target.value;
    if (value < 0)
      setPassingScore(0);
    else if (value > 100)
      setPassingScore(100);
    else
      setPassingScore(value)
  }

  const handleSaveExam = () => {
    // Save exam data
    console.log("Exam saved!");
  };
  const handlePublishAndSend = () => {
    // Publish exam and send invites
    console.log("Exam published and invites sent!");
  };
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Negative marking (%):</label>
        <input
          type="number"
          min="0"
          max="100"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={negativeMarking}
          onChange={handleNeagtiveMarking}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Assign Marks:</label>
        <br />
        <label className="block">Easy:</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={easyMarks}
          onChange={(e) => setEasyMarks(e.target.value)}
        />
        <br />
        <label className="block">Medium:</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={mediumMarks}
          onChange={(e) => setMediumMarks(e.target.value)}
        />
        <br />
        <label className="block">Hard:</label>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={hardMarks}
          onChange={(e) => setHardMarks(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Minimum passing score (%):</label>
        <input
          type="number"
          min="0"
          max="100"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={passingScore}
          onChange={handlePassingScore}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Registration Form:</label>
        <input
          type="checkbox"
          checked={registrationForm}
          onChange={(e) => setRegistrationForm(e.target.checked)}
        />
      </div>
      {registrationForm && (
        <div className="mb-4">
          <RegistrationForm />
          {/* Code for configuring registration form */}
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Capture image during the exam:</label>
        <input
          type="checkbox"
          checked={captureImage}
          onChange={(e) => setCaptureImage(e.target.checked)}
        />
      </div>
      {captureImage && (
        <div className="mb-4">
          Update Interval (in seconds):
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            value={captureImageInterval}
            onChange={(e) => setCaptureImageInterval(e.target.value)}
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Instructions:</label>
        <textarea
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          value={instructions}
          onChange={handleInstructionsChange}
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0 md:w-1/2 md:mr-2"
          onClick={handlePublishAndSend}
        >
          Publish & Send Invite
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded md:w-1/2 md:ml-2"
          onClick={handleSaveExam}
        >
          Save and Close
        </button>
      </div>
    </div>
  )
}

export default AdvancedSetting;