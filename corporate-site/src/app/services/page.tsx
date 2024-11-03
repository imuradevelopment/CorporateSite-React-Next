export default function Services() {
  const services = [
    {
      title: "ウェブアプリケーション開発",
      description: "最新のフレームワークを使用し、スケーラブルで高性能なウェブアプリケーションを開発します。",
      features: [
        "フロントエンド開発",
        "バックエンド開発",
        "データベース設計",
        "API開発",
      ]
    },
    {
      title: "クラウドソリューション",
      description: "AWSやGCPなどのクラウドプラットフォームを活用し、柔軟でセキュアなインフラを構築します。",
      features: [
        "クラウドインフラ設計",
        "マイグレーション支援",
        "運用・保守",
        "セキュリティ対策",
      ]
    },
    {
      title: "AIソリューション",
      description: "機械学習と人工知能を活用して、ビジネスプロセスの自動化と効率化を実現します。",
      features: [
        "データ分析",
        "機械学習モデル開発",
        "自然言���処理",
        "画像認識",
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">サービス</h1>

      <div className="space-y-16">
        {services.map((service, index) => (
          <section key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">主な機能と特徴</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">お困りの点がございましたら</h2>
        <p className="text-gray-600 mb-8">
          サービスについての詳細な説明や、お見積りのご相談など、お気軽にお問い合わせください。
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          お問い合わせはこちら
        </a>
      </div>
    </div>
  );
} 