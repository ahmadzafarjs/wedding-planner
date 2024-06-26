import "@/app/_styles/globals.css";
import Navigation from "./_components/Navigation"
import SecNavigation from "./_components/SecNavigation";
import {Poppins} from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Wedding Planner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
      <Navigation />
      <SecNavigation />
      <main>
      {children}
      </main>
      </body>
    </html>
  )
}
