/** @type {import('next').NextConfig} */

const BASE_PATH = '' //process.env.NODE_ENV === 'production' ? '/cheshi/3dtest' : ''
module.exports = {
  output: 'export',
  distDir: 'dist',
  basePath: BASE_PATH,
  env: { BASE_PATH }
}
