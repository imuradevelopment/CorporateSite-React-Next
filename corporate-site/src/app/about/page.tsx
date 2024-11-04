export default function About() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
          私たちについて
        </h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p className="text-muted-foreground">
            私たちは、テクノロジーの力でビジネスの課題を解決し、
            お客様の成功をサポートすることを使命としています。
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-foreground">ミッション</h2>
          <p className="text-muted-foreground">
            最新のテクノロジーを活用し、お客様のビジネスに革新的なソリューションを
            提供することで、持続可能な成長を実現します。
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-foreground">バリュー</h2>
          <ul className="mt-4 space-y-4 text-muted-foreground">
            <li>
              <strong className="text-foreground">革新性</strong> - 
              常に最新のテクノロジーとベストプラクティスを追求します
            </li>
            <li>
              <strong className="text-foreground">信頼性</strong> - 
              確かな技術力と実績で、お客様の信頼に応えます
            </li>
            <li>
              <strong className="text-foreground">協調性</strong> - 
              お客様と共に考え、最適なソリューションを提供します
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 