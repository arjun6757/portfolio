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
      // 
      className="fixed bottom-0 left-0 right-0 sm:relative w-screen sm:min-h-screen sm:w-14 bg-primary p-2 sm:py-3 sm:border-r border-gray-700"
    >
      <Sidebar.Items className="w-full">
        <Sidebar.ItemGroup className="flex justify-center sm:flex-col gap-4 sm:gap-2">
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
