/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: Object.keys(process.env)
    .filter(key => key.startsWith('NEXT_PUBLIC'))
    .reduce((obj, key) => ({ ...obj, [key]: process.env[key] }), {}),
  swcMinify: true,
}

module.exports = nextConfig
