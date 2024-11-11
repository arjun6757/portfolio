import React from "react";
import { Sidebar } from "flowbite-react";
import { HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function SidebarComponent() {
  return (
    <Sidebar
      collapsed="true"
      aria-label="Sidebar"
      className="h-screen w-14 bg-primary border-r-0-border-sky-200 p-2 py-3 border-r border-gray-700"
    >
      <Sidebar.Items className="w-full">
        <Sidebar.ItemGroup className="flex flex-col gap-2">
          <Sidebar.Item href="#" icon={HomeIcon} className="hover:bg-gray-700">
           Home 
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={UsersIcon} className="hover:bg-gray-700">
            Skills
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
