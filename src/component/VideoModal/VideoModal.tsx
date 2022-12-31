import { MouseEventHandler } from "react";
import XMark from "../XMark";

export interface ModalWrapperProps {
  closeCallback: MouseEventHandler<HTMLButtonElement>;
  width: number;
  video_id?: string;
}

const videoModal = (props: ModalWrapperProps) => {
  return (
    <div className="fixed inset-0 bg-black/[0.88] backdrop-blur z-50 lg:px-[5vw] md:px-6 lg:py-[5vh] md:py-10 sm:pt-4 flex">
      <div
        className="lg:m-auto md:m-auto sm:mt-16 overflow-hidden max-h-full w-full relative"
        style={{ maxWidth: `${props.width}px` }}
      >
        <button
          className="flex items-center justify-center border-2 sm:m-auto text-white mb-4 float-right sm:float-none sm:mb-6 border-gray-06 w-40 h-12 rounded-lg z-10"
          onClick={props.closeCallback}
        >
          Close Video
          <XMark />
        </button>
        {props.video_id && (
          <iframe
            title="video"
            className="w-full h-[581px] xs:h-[300px]"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/${props.video_id}?autoplay=1`}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default videoModal;
