import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Button from "../components/Button/Button";
import ThemeSelector from "../components/ThemeSelector/ThemeSelector";
import Feed from "../components/Feed/Feed";
import Card from "../components/Card/Card";
import Item from "../components/Feed/Item/Item";

const feedItems = [
  {
    id: 1,
    title: "Lorem",
    content:
      "Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
  },
  {
    id: 2,
    title: "Lorem",
    content:
      "Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
  },
  {
    id: 3,
    title: "Lorem",
    content:
      "Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="body">
        <Navbar />
        <Sidebar />
        <Feed>
          <Card header="Buttons">
            <Button variant="base">Base</Button>
            <Button variant="ok">Ok</Button>
            <Button variant="err">Error</Button>
          </Card>
          <Card header="Select a theme">
            <ThemeSelector />
          </Card>
          <Card header="Lorem"></Card>
          {feedItems.map((item) => (
            <Item title={item.title} content={item.content} key={item.id} />
          ))}
        </Feed>
      </div>
    </>
  );
}
