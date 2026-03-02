import "./globals.css";

export const metadata = {
  title: "CRM Dashboard",
  description: "Premium CRM Dashboard UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#0B0B0F] text-white min-h-screen">

        {/* GLOBAL GLOW BACKGROUND */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-orange-500/20 blur-[180px] rounded-full" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-yellow-400/20 blur-[180px] rounded-full" />
        </div>

        {children}
      </body>
    </html>
  );
}