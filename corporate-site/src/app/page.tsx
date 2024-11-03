import { FaRocket, FaLightbulb, FaUsers } from 'react-icons/fa';

export default function Home() {
  const features = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "迅速な開発",
      description: "最新のテクノロジーを活用し、スピーディーな開発を実現します。"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "革新的なソリューション",
      description: "お客様のビジネス課題に対して、革新的な解決策を提供します。"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "専門家チーム",
      description: "経験豊富な専門家チームが、プロジェクトをサポートします。"
    }
  ];

  return (
    <div className="space-y-12">
      {/* ヒーローセクション */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">
          ビジネスの成長をテクノロジーで加速する
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          私たちは最新のテクノロジーを活用して、
          お客様のビジネスの成長をサポートします。
        </p>
      </section>

      {/* 特徴セクション */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">特徴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
