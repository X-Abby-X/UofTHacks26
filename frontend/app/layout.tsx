// frontend/app/layout.tsx
import { Sidebar } from '@/app/ui/Sidebar';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#00204E] min-h-screen relative overflow-x-hidden">
        {/* Orbs at z-0 */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-[#8B5CF6] top-[-10%] left-[-5%]" />
          <div className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-[#10B981] bottom-[-10%] right-[-5%]" />
        </div>

        {/* Main Wrapper at z-10 */}
        <div className="relative z-10 flex">
          <Sidebar />

          {/* FIX: ml-20 (80px) pushes the content past the fixed sidebar */}
          <div className="flex-1 ml-20 min-h-screen relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}