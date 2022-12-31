import { MediaPlayer } from "../MediaPlayer";

export interface VideoCardProps {}

const VideoCard = () => {
  return (
    <>
      <div className="flex flex-col  overflow-hidden basis-1/3">
        <div className="bg-blue px-[135px] py-[70px] w-[300px] rounded-3xl">
          <span className=" text-white">
            <MediaPlayer />
          </span>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
