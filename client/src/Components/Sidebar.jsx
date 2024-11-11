import React from "react";
import { Sidebar } from "flowbite-react";
import { HomeIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function SidebarComponent() {
  const navigate = useNavigate();

  return (
    <Sidebar
      collapsed="true"
      aria-label="Sidebar"
      className="h-screen w-14 bg-primary border-r-0-border-sky-200 p-2 py-3 border-r border-gray-700"
    >
      <Sidebar.Items className="w-full">
        <Sidebar.ItemGroup className="flex flex-col gap-2">
          <Sidebar.Item onClick={() => navigate("/")} icon={HomeIcon} className="cursor-pointer hover:bg-gray-700">
           Home 
          </Sidebar.Item>
          <Sidebar.Item onClick={() => navigate("/skills")} icon={BriefcaseIcon} className="cursor-pointer hover:bg-gray-700">
            Skills
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
