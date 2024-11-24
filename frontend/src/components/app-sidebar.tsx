import { Calendar, Home, Inbox, Search, Settings, LayoutDashboard, Tractor, ChartCandlestick, Factory, Truck, FlagTriangleRight, MessageCircleWarning } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Farmers",
    url: "/farmers",
    icon: Tractor,
  },
  {
    title: "Traders",
    url: "/traders",
    icon: ChartCandlestick,
  },
  {
    title: "Wholesalers",
    url: "/wholesalers",
    icon: Factory,
  },
  {
    title: "Transportation",
    url: "/transportation",
    icon: Truck,
  },
  {
    title: "Price Bound Report",
    url: "/price-bound-report",
    icon: FlagTriangleRight,
  },
  {
    title: "General Report",
    url: "/general-report",
    icon: MessageCircleWarning,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="h-full" variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
