import * as React from "react";
import { Avatar, AvatarProps } from "@files-ui/react";

const fallBackImage =
  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";

export default function PassportUpload() {
  const [imageSource, setImageSource] = React.useState<
    AvatarProps["src"] | undefined
  >(fallBackImage);

  const handleChangeSource = (selectedFile: File) => {
    setImageSource(selectedFile);
  };

  return (
    <Avatar
      src={imageSource}
      alt="Oluwashina"
      changeLabel={"Upload passport"}
      onError={() => setImageSource(fallBackImage)}
      //   isLoading={true}
      onChange={handleChangeSource}
    />
  );
}
