import Link from "next/link";



export default function Footer() {

  return (

    <footer className="border-t">

      <div className="container py-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-muted-foreground">

              © 2024 Corporate Site. All rights reserved.

            </p>

          </div>

          <div className="flex gap-4">

            <a href="#" className="text-sm text-muted-foreground hover:underline">

              Privacy Policy

            </a>

            <a href="#" className="text-sm text-muted-foreground hover:underline">

              Terms of Service

            </a>

          </div>

        </div>

      </div>

    </footer>

  );

} 
