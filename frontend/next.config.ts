import type { NextConfig } from "next";

// Standard: normaler Next-Betrieb (Dev + Vercel).
// Mit BUILD_STATIC=1 wird ein statischer Export nach ./out erzeugt
// (fuer das offline lauffaehige Review-Paket).
const isStaticExport = process.env.BUILD_STATIC === "1";

const allowedDevOrigins = [
  "84447203-0439-4341-96ab-b0689b30ce08.preview.emergentagent.com",
  "*.preview.emergentagent.com",
  "barber-pro-94.cluster-5.preview.emergentcf.cloud",
  "*.preview.emergentcf.cloud",
];

const nextConfig: NextConfig = isStaticExport
  ? { output: "export", images: { unoptimized: true } }
  : { allowedDevOrigins };

export default nextConfig;
