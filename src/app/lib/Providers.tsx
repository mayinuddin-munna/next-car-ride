import * as React from "react";

import { HeroUIProvider } from "@heroui/system";

function Providers({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}

export default Providers;
