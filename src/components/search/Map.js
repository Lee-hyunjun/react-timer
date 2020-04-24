import React from 'react';
import KakaoMaps from 'tenel-react-kakao-map';

import './map.scss';

export default function Map() {
  const [container, setContainer] = React.useState(null);
  const [mapCenter] = React.useState({ lat: 33.450701, lng: 126.570667 });

  return (
    <div ref={(ref) => setContainer(ref)} style={{ width: '100vw', height: '100vh' }}>
      {container
        ? (
          <KakaoMaps.Map
            container={container}
            center={mapCenter}
          >
            <KakaoMaps.CustomOverlay
              position={mapCenter}
              content={`
                <div class="search-marker">
                  <div class="num">2</div>
                  <div class="name">마켓플레이스</div>
                </div>
              `}
            />
          </KakaoMaps.Map>
        )
        : <span>로드중...</span>
      }
    </div>
  );
}
