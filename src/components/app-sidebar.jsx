// import * as React from "react";

// import { SearchForm } from "@/components/search-form";
// import { VersionSwitcher } from "@/components/version-switcher";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarRail,
// } from "@/components/ui/sidebar";

// import { BookOpen, LayoutDashboard, Users } from "lucide-react";
// import Link from "next/link";

// const data = {
//   navMain: [
//     {
//       title: "Product",
//       url: "/product",
//       icon: LayoutDashboard,
//     },
//     {
//       title: "Customer",
//       url: "/customer",
//       icon: Users,
//     },
//     {
//       title: "Categories",
//       url: "",
//       icon: BookOpen,
//     },
//   ],
// };

// export function AppSidebar(props) {
//   return (
//     <Sidebar {...props} collapsible="icon">
//       <SidebarHeader>
//         <VersionSwitcher />
//       </SidebarHeader>

//       <SidebarContent>
//         <p className="ml-4 font-bold mt-14 text-gray-500">Main Feature</p>

//         {data.navMain.map((item) => {
//           const Icon = item.icon;

//           return (
//             <SidebarGroup key={item.title}>
//               <SidebarGroupLabel className="flex  gap-2">
//                 <Icon className="size-4 text-cyan-400" />
//                 <Link href={item.url}>{item.title}</Link>
//               </SidebarGroupLabel>

//               <SidebarGroupContent></SidebarGroupContent>
//             </SidebarGroup>
//           );
//         })}
//       </SidebarContent>

//       <SidebarRail />
//     </Sidebar>
//   );
// }
// {
//   /* <SidebarMenu>
//                 {item.items.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild isActive={item.isActive}>
//                       <a href={item.url}>{item.title}</a>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//               </SidebarMenu> */
// }

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { BookOpen, LayoutDashboard, Users } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Product",
      url: "/product",
      icon: LayoutDashboard,
    },
    {
      title: "Customer",
      url: "/customer",
      icon: Users,
    },
    {
      title: "Categories",
      url: "/c",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar(props) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} collapsible="icon">
      <Link href="/">
        <SidebarHeader>
          <VersionSwitcher />
        </SidebarHeader>
      </Link>

      <SidebarContent>
        <p className="ml-4 font-bold mt-14 text-gray-500">Main Feature</p>

        {data.navMain.map((item) => {
          const Icon = item.icon;

          const isActive = item.url !== "/" && pathname.startsWith(item.url);

          return (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>
                <Link
                  href={item.url}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all
                    ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-500 font-semibold"
                        : "text-gray-500 hover:text-cyan-500 hover:bg-gray-100"
                    }
                  `}
                >
                  <Icon
                    className={`size-4 ${
                      isActive ? "text-cyan-500" : "text-gray-400"
                    }`}
                  />
                  <span>{item.title}</span>
                </Link>
              </SidebarGroupLabel>

              <SidebarGroupContent />
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
