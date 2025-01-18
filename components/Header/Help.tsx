import { cn } from "@/lib/cn";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Tooltip from "../ui/Tooltip"
import { Keyboard } from "lucide-react";
import Kbd from "../ui/Kbd"; 

const SHORTCUTS = [
  {
    key: "sign-in",
    scope: ["unauthenticated"],
    label: "Sign in",
    kbd: ["L"],
  },
  {
    key: "new-snippet",
    scope: ["dashboard"],
    label: "New snippet",
    kbd: ["N"],
  },
  {
    key: "rename-snippet",
    scope: ["dashboard"],
    label: "Rename snippet",
    kbd: ["hover", "R"],
  },
  {
    key: "copy-snippet-link",
    scope: ["dashboard"],
    label: "Copy link",
    kbd: ["hover", "C"],
  },
  {
    key: "delete-snippet",
    scope: ["dashboard"],
    label: "Delete snippet",
    kbd: ["hover", "D"],
  },
  {
    key: "focus-editor",
    scope: ["authenticated", "unauthenticated"],
    label: "Focus text editor",
    kbd: ["F"],
  },
  {
    key: "blur-editor",
    scope: ["authenticated", "unauthenticated"],
    label: "Unfocus editor",
    kbd: ["Esc"],
  },
  {
    key: "focus-title-input",
    scope: ["authenticated", "unauthenticated"],
    label: "Focus title input",
    kbd: ["T"],
  },
  {
    key: "copy-link",
    scope: ["authenticated"],
    label: "Copy link",
    kbd: ["command", "shift", "C"],
  },
  {
    key: "copy-image",
    scope: ["authenticated", "unauthenticated"],
    label: "Copy image",
    kbd: ["command", "C"],
  },
  {
    key: "download-image",
    scope: ["authenticated", "unauthenticated"],
    label: "Download image as PNG",
    kbd: ["command", "S"],
  },
  {
    key: "dashboard",
    scope: ["authenticated"],
    label: "Dashboard",
    kbd: ["B"],
  },
  {
    key: "user-menu",
    scope: ["authenticated", "dashboard"],
    label: "Open user menu",
    kbd: ["U"],
  },
  {
    key: "sign-out",
    scope: ["authenticated", "dashboard"],
    label: ["Sign out"],
    kbd: ["Q"],
  },
  {
    key: "help",
    scope: ["authenticated", "unauthenticated", "dashboard"],
    label: "Open shortcuts dialog",
    kbd: ["?"],
  },
];

export default function Help() {
  const [localDialogOpen, setLocalDialogOpen] = useState(false);

  const pathname = usePathname();

  const { status: sessionStatus } = useSession();

  const shortcuts = SHORTCUTS.filter((shortcut)=>{
    if (pathname === "/dashboard" && shortcut.scope.includes("dashboard")) {
      return true;
    }

    if (pathname !== "/dashboard" && shortcut.scope.includes(sessionStatus)) {
      return true;
    }
  });


  return (
    <div>
      hii
    </div>
  )
}

