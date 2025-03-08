"use client";
import {
  Box,
  Divider,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { usePathname, useRouter } from "next/navigation";
import LogoSVG from "../assets/icons/logo.svg";
import LogoMobileSVG from "../assets/icons/logo_mobile.svg";
import path from "path";
import { useMemo } from "react";
import SearchInput from "../components/SearchInput";
import NavigationAPP from "../containers/NavigationAPP";
const Header = () => {
  const router = useRouter();
  const matches = useMediaQuery("(min-width:750px)");
  console.log("matches", matches);
  const hidePcSearch = useMediaQuery("(max-width:1250px)");
  const pathname = usePathname();
  const isHome = useMemo(() => pathname === "/", [pathname]);
  const goSearch = (e: string) => {
    router.replace(`/search?searchBy=${e}`);
  };

  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          height: "64px",
          background: "#171A1F",
          backdropFilter: "blur(4.5px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          left: "0",
          top: "0",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Box
            onClick={() => {
              router.push("/");
            }}
            sx={{
              position: "absolute",
              left: "24px",
              zIndex: 5,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            {matches || (!matches && isHome) ? <LogoSVG /> : <LogoMobileSVG />}
          </Box>
          {!matches && !isHome && (
            <SearchInput
              placeholder={matches ? "Search ethscriptions" : "Ethscription"}
              onClear={() => {}}
              onClick={(val) => {
                goSearch(val as string);
              }}
              onEnter={(val) => {
                goSearch(val as string);
              }}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "52vw",
                height: 40,
                ml: "70px",
                borderRadius: "20px",
                border: "1px solid #2F343E",
                // backgroundColor: '#171A1F',
              }}
            />
          )}
          {matches && (
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                top: 0,
                left: "164px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "fill",
                zIndex: 2,
              }}
            >
              <NavigationAPP />
            </Box>
          )}

          {/* <ConnectButton accountStatus="avatar" /> */}
        </Box>
      </Box>
      <Divider />
    </div>
  );
};

export default Header;
