import './globals.css'
import type { Metadata } from 'next'
import { calSans, inter } from './fonts';

export const metadata: Metadata = {
	title: {
		default: "zergcore.click",
		template: "%s | zergcore.click",
	},
	description: "Software Engineer and Fullstack Developer",
	openGraph: {
		title: "zergcore.click",
		description:
			"Software Engineer and Fullstack Developer",
		url: "https://zergcore.click",
		siteName: "zergcore.click",
		images: [
			{
				url: "https://zergcore.click/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "zergcore",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};

export default function RootLayout({
  children,
  }: {
  children: React.ReactNode
  }) {
    return (
      <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
        <head>
        </head>
        <body
          className={`bg-black ${
            process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
        >
          {children}
        </body>
      </html>
    )
}
