// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${poppins.className}   antialiased`}>
      <body>
        <div>
          <SidebarProvider>
            <div className="flex">
              <div>
                <AppSidebar />
              </div>
            </div>
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
