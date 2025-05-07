/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [], // Add any external domains if needed
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Include larger sizes
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Include larger sizes      
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"          
      },
};

export default nextConfig;
