import { useReducer } from "react";
import { MediaPlayer } from "../MediaPlayer";
import VideoModal from "../VideoModal/VideoModal";

export interface VideoCardProps {
  video_id: string;
}

const VideoCard = () => {
  const [showModal, toggleShowModal] = useReducer((state) => !state, false);

  return (
    <>
      {showModal && (
        <VideoModal
          width={1032}
          video_id="oMmqCtFTtbU"
          closeCallback={toggleShowModal}
        />
      )}
      <div
        onClick={toggleShowModal}
        className="bg-cyan-600 px-[135px] py-[70px] w-[300px] rounded-3xl mx-4 my-4"
      >
        <span className=" text-white">
          <MediaPlayer />
        </span>
      </div>
    </>
  );
};

export default VideoCard;
