import React from "react";
import IframePlayer from "player-iframe-video";
import "player-iframe-video/dist/index.css";

const App = () => {
  return <div style={{ position: "relative", width: "100%", height: "300vh" }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, width: "100%", height: "100vh" }}>
      <IframePlayer id={"iframe-vimeo-player-test"} iFrame={<iframe width="100%" height="100%"
                                                                    src="https://player.vimeo.com/video/422883518?h=aee925f4ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1"
                                                                    frameBorder="0"
                                                                    allow="autoplay; fullscreen; picture-in-picture"
                                                                    allowFullScreen
                                                                    title="Geniam Campaign"></iframe>} />
    </div>
  </div>;
};

export default React.memo(App);
