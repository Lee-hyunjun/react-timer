import React from "react";
import KakaoMaps from "tenel-react-kakao-map";
import DaumPostcode from "react-daum-postcode";

export default function Map() {
  const [container, setContainer] = React.useState(null);
  const [mapCenter] = React.useState({ lat: 33.450701, lng: 126.570667 });

  React.useEffect(() => {
    console.log(container);
  }, [container]);

  console.log(navigator);

  const handleAddress = data => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <div
      className="test"
    >
      <div>
        <DaumPostcode
          onComplete={handleAddress}
        />
      </div>
      <div
        ref={ref => setContainer(ref)}
        style={{ width: "100vw", height: "100vh" }}
      >
        {container ? (
          <KakaoMaps.Map 
            container={container}
            center={mapCenter} />
        ) : (
          <span>로드중...</span>
        )}
      </div>
    </div>
  );
}
