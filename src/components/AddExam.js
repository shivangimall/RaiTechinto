
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import AdvancedSetting from './AdvancedSetting';

function AddExam() {
  const [examName, setExamName] = useState('');
  const [examDuration, setExamDuration] = useState('');
  const [questionPicking, setQuestionPicking] = useState('Auto');
  const [topics, setTopics] = useState([
    { id: 1, name: 'Topic 1' },
    { id: 2, name: 'Topic 2' },
    { id: 3, name: 'Topic 3' }
  ]);
  const [questions, setQuestions] = useState([]);




  const handleTopicChange = (index, topicId) => {
    const newQuestions = [...questions];
    newQuestions[index].topicId = topicId;
    setQuestions(newQuestions);
  };

  const handleInputChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { topicId: '', easy: '', medium: '', hard: '' }]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const calculateTotalQuestions = (question) => {
    return parseInt(question.easy || 0) + parseInt(question.medium || 0) + parseInt(question.hard || 0);
  };



  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Exam</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Exam Name:</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Exam Duration (in minutes):</label>
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            value={examDuration}
            onChange={(e) => setExamDuration(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Question Picking:</label>
          <select
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            value={questionPicking}
            onChange={(e) => setQuestionPicking(e.target.value)}
          >
            <option value="Auto">Auto</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        {questionPicking === 'Manual' && (
          <div className="mb-4 overflow-x-auto">
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Topic</th>
                  <th className="border px-4 py-2">Easy</th>
                  <th className="border px-4 py-2">Medium</th>
                  <th className="border px-4 py-2">Hard</th>
                  <th className="border px-4 py-2">Total Questions</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((question, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">
                      <select
                        className="border border-gray-300 rounded sm:40 md:w-22 px-3 py-2  focus:outline-none focus:border-blue-500"
                        value={question.topicId}
                        onChange={(e) => handleTopicChange(index, e.target.value)}
                      >
                        <option value="">Select Topic</option>
                        {topics.map((topic) => (
                          <option key={topic.id} value={topic.id}>{topic.name}</option>
                        ))}
                      </select>
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        className="border border-gray-300 rounded px-3 py-2 w-20 focus:outline-none focus:border-blue-500"
                        value={question.easy || ''}
                        onChange={(e) => handleInputChange(index, 'easy', e.target.value)}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                        value={question.medium || ''}
                        onChange={(e) => handleInputChange(index, 'medium', e.target.value)}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        className="border border-gray-300 rounded px-3 py-2 w-20 focus:outline-none focus:border-blue-500"
                        value={question.hard || ''}
                        onChange={(e) => handleInputChange(index, 'hard', e.target.value)}
                      />
                    </td>
                    <td className="border px-4 py-2">{calculateTotalQuestions(question)}</td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleRemoveQuestion(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleAddQuestion}
            >
              Add Question
            </button>
          </div>
        )}


        <AdvancedSetting />

      </div>
    </div>
  );
}

export default AddExam;



