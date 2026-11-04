import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Portfolio work needs to look crisp, so serve every image at 85 instead of the default 75.
    // Images without a quality prop snap to the closest value listed here.
    qualities: [85],
  },
};

export default nextConfig;
