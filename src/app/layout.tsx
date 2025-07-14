import "@/app/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
	title: "Astonware",
	description: "Software - Built to astonish.",
	icons: [{ rel: "icon", url: "/favicon.svg" }],
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={inter.className}>
			<body className="bg-brandBlack text-brandWhite">
				<SpeedInsights />
				<Analytics />
				{children}
			</body>
		</html>
	);
}
