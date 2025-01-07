import React from 'react';

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

const alumniStories = [
  {
    name: 'Sarah Chen',
    role: 'Senior Software Engineer',
    company: 'TechCorp',
    story: 'After graduation, I focused on cloud technologies which opened numerous opportunities. My advice to current students: stay curious and never stop learning.',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'James Wilson',
    role: 'Tech Lead',
    company: 'InnovateLabs',
    story: 'The foundation I built during my studies was crucial. I now lead a team developing cutting-edge AI applications.',
    imageUrl: 'https://i.pravatar.cc/150?img=2',
  },
];

function AlumniStory({ name, role, company, story, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex gap-6">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-blue-600 mb-2">
          {role} at {company}
        </p>
        <p className="text-gray-600">{story}</p>
      </div>
    </div>
  );
}

function TrendCard({ title, description, date, category }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
        {category}
      </span>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <time className="text-sm text-gray-500">{date}</time>
    </div>
  );
}

export default function Ft() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Future Trends & Alumni Insights
          </h1>
          <p className="text-xl text-gray-600">
            Stay ahead with industry trends and learn from our successful alumni
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trends.map((trend, index) => (
              <TrendCard key={index} {...trend} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alumni Success Stories</h2>
          <div className="space-y-6">
            {alumniStories.map((story, index) => (
              <AlumniStory key={index} {...story} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
