import React, { ReactElement, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { useOnScreen } from "./hooks/useOnScreen";
import Player from "@vimeo/player";

type VideoProps = {
  id: string,
  iFrame: ReactElement<any, any>,
  height?: string,
  isMain?: any,
  type?: string
}

function IframePlayer({ id, iFrame, height = "100%", isMain = "" }: VideoProps) {
  const ref: any = useRef<HTMLDivElement>();
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref);

  useEffect(() => {
    // Get a reference to the iframe element
    if (!id)
      return;

    const iFrameElement: any = document.querySelector(`#${id} iframe`);
    if (!iFrameElement)
      return;

    // Retrieve window object needed for postMessage
    const player = new Player(iFrameElement);
    player.ready().then();

    if (onScreen) {
      player.play().then(() => {
        // console.log('play', res)
      }).catch(() => {
        // console.log(e);
      });

      player.on("ended", () => {
        if (isMain) {
          setTimeout(() => {
            const el: any = document.getElementById(isMain);
            let top = el.offsetTop;
            if (!el)
              return;
            return window.scrollTo({ top: top, left: top + el.offsetHeight, behavior: "smooth" });
          }, 500);
        }
      });

    } else {
      player.pause().then(() => {
        // console.log("pause", res);
      }).catch(() => {
      });
    }

  }, [onScreen, id]);

  return (
    <div ref={ref} className={isMain ? styles.VideoRootMain : styles.VideoRoot} id={id} style={{ height }}>
      {iFrame}
    </div>
  );
}

export default React.memo(IframePlayer);
