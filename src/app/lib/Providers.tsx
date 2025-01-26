import * as React from "react";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <HeroUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </HeroUIProvider>
    </HeroUIProvider>
  );
}

export default Providers;
