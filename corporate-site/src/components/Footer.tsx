import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">会社情報</h3>
            <p className="text-gray-300">株式会社サンプル<br />
            〒150-0002<br />
            東京都渋谷区渋谷1-1-1</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">会社概要</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">サービス</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300">TEL: 03-1234-5678<br />
            営業時間: 平日 9:00-18:00</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-300">&copy; {currentYear} COMPANY NAME All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 