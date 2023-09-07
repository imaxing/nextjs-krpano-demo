/** @type {import('next').NextConfig} */

module.exports = {
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/cheshi/3dtest'
}
