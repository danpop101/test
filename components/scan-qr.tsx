"use client";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

export const ScanQr = () => {
  const [data, setData] = useState("No result");
  var audio = new Audio("./beep.wav");

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="flex-1 mt-4 min-h-[430px]">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.getText().toString());
              audio.play();
            }

            if (!!error) {
              console.info(error);
            }
          }}
          containerStyle={{ height: 240, width: 450 }}
          constraints={{ facingMode: "environment" }}
        />
      </div>

      <div className="flex-1">
        <p>{data}</p>
      </div>
    </div>
  );
};
