import "./globals.css";

export const metadata = {
  title: "Ambio | AI Receptionist for Salons",
  description:
    "AI-powered receptionist that answers calls and manages appointments for modern salons.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}