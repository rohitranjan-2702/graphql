import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function Loader() {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://lottie.host/e6eebbf9-1f07-4ed8-bcaf-1cda2f433bed/ZRQkrRW6mO.json"
        style={{ height: "300px", width: "300px" }}
      >
        <Controls visible={false} buttons={[]} />
      </Player>
    </div>
  );
}
