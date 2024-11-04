import Link from "next/link";



export default function Footer() {

  return (

    <footer className="border-t bg-background">

      <div className="container py-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>

            <h3 className="font-bold mb-4">Corporate Site</h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">

              最新のテクノロジーで、ビジネスの課題を解決します。

            </p>

          </div>

          <div>

            <h4 className="font-semibold mb-4">リンク</h4>

            <ul className="space-y-2">

              <li><a href="/about" className="text-sm hover:underline">会社概要</a></li>

              <li><a href="/services" className="text-sm hover:underline">サービス</a></li>

              <li><a href="/contact" className="text-sm hover:underline">お問い合わせ</a></li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-4">サービス</h4>

            <ul className="space-y-2">

              <li><a href="/services#consulting" className="text-sm hover:underline">コンサルティング</a></li>

              <li><a href="/services#development" className="text-sm hover:underline">システム開発</a></li>

              <li><a href="/services#support" className="text-sm hover:underline">サポート</a></li>

            </ul>

          </div>

          <div>

            <h4 className="font-semibold mb-4">お問い合わせ</h4>

            <p className="text-sm text-gray-600 dark:text-gray-400">

              〒000-0000<br />

              東京都千代田区...<br />

              TEL: 03-0000-0000

            </p>

          </div>

        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600 dark:text-gray-400">

          © {new Date().getFullYear()} Corporate Site. All rights reserved.

        </div>

      </div>

    </footer>

  );

} 
