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
    <div>
      {/* ヒーローセクション */}
      <section className="relative py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              ビジネスの成長を<br className="hidden sm:inline" />
              テクノロジーで加速する
            </h1>
            <p className="mb-12 text-lg text-muted-foreground md:text-xl">
              私たちは最新のテクノロジーを活用して、<br className="hidden sm:inline" />
              お客様のビジネスの成長をサポートします。
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                お問い合わせ
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                サービス一覧
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="border-t py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
              >
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
