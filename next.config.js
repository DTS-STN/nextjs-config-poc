/** @type {import('next').NextConfig} */

const serverRuntimeConfig = Object.keys(process.env)
  .filter(key => key.startsWith('NEXT_PUBLIC'))
  .reduce((previousValue, currentValue) => ({ ...previousValue, [currentValue]: process.env[currentValue] }), {})

const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig,
  swcMinify: true,
}

module.exports = nextConfig
