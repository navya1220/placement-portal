import React, { useEffect, useState } from 'react';
import './Ft.css'; 

const trends = [
  {
    title: 'AI in Software Development',
    description: 'How artificial intelligence is transforming the way we write and maintain code.',
    date: 'March 2024',
    category: 'Technology',
  },
  {
    title: 'Remote Work Evolution',
    description: 'New tools and practices shaping the future of remote collaboration.',
    date: 'March 2024',
    category: 'Workplace',
  },
  {
    title: 'Cloud-Native Development',
    description: 'The growing importance of cloud-native architectures and microservices.',
    date: 'March 2024',
    category: 'Infrastructure',
  },
];

function AlumniStory({ name, role, company, story, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex gap-6 transition-transform duration-300 transform hover:scale-105">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
      />
      <div>
        <h3 className="text-lg font-bold text-indigo-900">{name}</h3>
        <p className="text-indigo-600 mb-2">{role} at {company}</p>
        <p className="text-gray-600">{story}</p>
      </div>
    </div>
  );
}

function TrendCard({ title, description, date, category }) {
  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <span className="inline-block px-3 py-1 text-sm font-semibold bg-purple-700 rounded-full mb-3">
        {category}
      </span>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <time className="text-sm text-purple-200">{date}</time>
    </div>
  );
}

export default function Ft() {
  const [alumniStories, setAlumniStories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumniStories = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/alumini');
        if (!response.ok) throw new Error('Failed to fetch alumni data');
        const data = await response.json();
        setAlumniStories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAlumniStories();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900 sm:text-5xl mb-4 animate-fade-in">
            Future Trends & Alumni Insights
          </h1>
          <p className="text-xl text-gray-600">
            Stay ahead with industry trends and learn from our successful alumni
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Latest Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trends.map((trend, index) => (
              <TrendCard key={index} {...trend} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Alumni Success Stories</h2>
          {error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <div className="space-y-6">
              {alumniStories.map((story, index) => (
                <AlumniStory key={index} {...story} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
