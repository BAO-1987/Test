import {
  defineConfig
} from 'vite';
import vituum from 'vituum';
import handlebars from '@vituum/vite-plugin-handlebars';
import postcss from '@vituum/vite-plugin-postcss';
import {
  ViteImageOptimizer
} from 'vite-plugin-image-optimizer';
import {
  ViteMinifyPlugin
} from 'vite-plugin-minify';

export default defineConfig({
  plugins: [
    vituum(),
    handlebars({
      partials: {
        directory: 'src/partials',
        extname: false
      },
      helpers: {
        isActive: (page, name) => (page === name ? 'is-active' : '')
      },
    }),
    postcss({
      autoprefixer: {
        overrideBrowserslist: ['last 2 versions', '> 1%', 'not dead']
      },
    }),
    ViteImageOptimizer({
      compress: {
        webp: {
          quality: 80
        },
        png: {
          quality: 80
        },
        jpg: {
          quality: 80
        },
        gif: {
          quality: 80
        },
        svg: {
          quality: 80
        },
      },
    }),

    {
      ...ViteMinifyPlugin({
        collapseWhitespace: true,
        removeComments: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
      }),
      apply: 'build',
    },
  ],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks: (id) => {
          if (id.includes('/src/scripts/')) return 'main';
        },
      },
    },
  },
});
