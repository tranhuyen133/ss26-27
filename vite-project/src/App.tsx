// import React from 'react'
import { ListCourse } from "./components/ListCourse";
import { Canculation } from "./components/Canculation";
import { UserInfo } from "./components/UserInfo";
import { ColorBox} from "./components/ColorBox";
import { FormatName } from "./components/FormatName";
import { UserLayout } from "./components./UserLayout";

export default function App() {
  return (
    <div>
      <ListCourse></ListCourse>
      <Canculation></Canculation>
      <UserInfo></UserInfo>
      <ColorBox></ColorBox>
      <FormatName></FormatName>
      <UserLayout></UserLayout>
    </div>
  )
}
