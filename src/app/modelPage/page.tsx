import Video from "@/components/Video";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Model Page",
  description: "This is Model Page",
  // other metadata
};

const ModelPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Model Page"
        description="About the model we developed"
      />
      <Video />
    </>
  );
};

export default ModelPage;
