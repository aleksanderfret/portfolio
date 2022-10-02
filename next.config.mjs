import { i18n } from './next-i18next.config.mjs';

const nextConfig = () => {
  const config = {
    i18n,
    trailingSlash: true,
  };

  return config;
};

export default nextConfig;
