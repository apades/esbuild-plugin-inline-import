const inlineImport = require('./index')
const esbuild = require('esbuild')
const path = require('path')

esbuild.build({
    alias: {
        '@root': path.resolve('./src'),
    },
    entryPoints: ["./src/index.js"],
    plugins: [inlineImport()],
    outdir: 'dist',
    bundle: true
})