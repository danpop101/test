"use client";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function Home() {
  const [data, setData] = useState("No result");

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.getText);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        containerStyle={{ height: 240, width: 320 }}
        scanDelay={500}
        constraints={{ facingMode: "user" }}
      />
      <p>{data}</p>
    </>
  );
}
