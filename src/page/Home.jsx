import Button from "@mui/material/Button";
import ResponsiveAppBar from "../Component/NavBarMui";
import Content from "../Component/content";
import TextContent from "../Component/TextContent";

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <TextContent></TextContent>
      <Content></Content>
    </div>
  );
}
