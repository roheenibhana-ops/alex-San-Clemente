import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "San Clemente Homes for Sale | Single-Family Homes | Alex Yu Team",
  description:
    "Search single-family homes for sale in San Clemente, CA. Median price around $2M. Free home valuation and local expertise from Alex Yu, First Team Real Estate.",
  openGraph: {
    title: "San Clemente Homes for Sale | Alex Yu Team",
    description: "Single-family beach homes and neighborhood expertise in San Clemente, CA.",
    images: ["/san-clemente-beach-homes.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#f7f3ec" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Alex Yu Team",
              description: "San Clemente single-family homes for sale, buyer and seller representation.",
              telephone: "+1-949-749-2946",
              email: "alex@alexyuteam.com",
              image: "/san-clemente-beach-homes.jpg",
              areaServed: { "@type": "City", name: "San Clemente", addressRegion: "CA" },
              address: {
                "@type": "PostalAddress",
                streetAddress: "4 Corporate Plaza, Suite 100",
                addressLocality: "Newport Beach",
                addressRegion: "CA",
                postalCode: "92660",
              },
              parentOrganization: { "@type": "Organization", name: "First Team Real Estate" },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
