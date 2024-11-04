export default function Services() {
  const services = [
    {
      title: "システム開発",
      description: "要件定義から設計、開発、運用まで一貫してサポートします。",
      features: [
        "Webアプリケーション開発",
        "モバイルアプリ開発",
        "クラウドインフラ構築"
      ]
    },
    {
      title: "コンサルティング",
      description: "お客様のビジネス課題に対して、最適なソリューションを提案します。",
      features: [
        "IT戦略立案",
        "システム最適化",
        "セキュリティ対策"
      ]
    },
    {
      title: "サポート・保守",
      description: "システムの安定運用をサポートし、継続的な改善を提案します。",
      features: [
        "24時間監視",
        "定期メンテナンス",
        "パフォーマンス最適化"
      ]
    }
  ]

  return (
    <div className="container py-20">
      <h1 className="mb-12 text-center text-4xl font-bold tracking-tight text-foreground">
        サービス一覧
      </h1>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
          >
            <h2 className="mb-3 text-2xl font-semibold">{service.title}</h2>
            <p className="mb-4 text-muted-foreground">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-muted-foreground">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
} 