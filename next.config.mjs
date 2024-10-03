/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Exclude SVGs from the default file loader
    config.module.rules.forEach((rule) => {
      if (rule?.test?.toString().includes("/\\.svg$/")) {
        rule.exclude = /\.svg$/;
      }
    });

    // Add a new rule to handle SVGs with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // Optional: set to true if using SVGs as icons
          },
        },
      ],
    });

    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
