export default function About() {
  const companyInfo = {
    established: "2010年4月",
    capital: "1億円",
    employees: "150名",
    offices: [
      "東京本社：東京都渋谷区渋谷1-1-1",
      "大阪支社：大阪市中央区...",
      "名古屋支社：名古屋市中区..."
    ]
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">会社概要</h1>
      
      <div className="space-y-8">
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">基本情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700">会社名</h3>
              <p className="text-gray-600">株式会社サンプル</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">設立</h3>
              <p className="text-gray-600">{companyInfo.established}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">資本金</h3>
              <p className="text-gray-600">{companyInfo.capital}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">従業員数</h3>
              <p className="text-gray-600">{companyInfo.employees}</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">事業所</h2>
          <ul className="space-y-4">
            {companyInfo.offices.map((office, index) => (
              <li key={index} className="text-gray-600">{office}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">事業内容</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>ウェブアプリケーション開発</li>
            <li>システムコンサルティング</li>
            <li>クラウドソリューション</li>
            <li>AIソリューション開発</li>
            <li>ITインフラ構築・運用</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 