import Image from "next/image";
import {
  UserButton,
} from '@clerk/nextjs'
import UploadReceipt from "./component/UploadReceipt";
export default function Home() {
  return (
    <div>

      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <UserButton/> */}
      <UploadReceipt />
    </div>
  );
}
