'use strict';

module.exports = {
  apps: [
    {
      name: 'PetStoreApi',
      script: 'src/index.js',
      watch: false,
      autorestart: false,
      max_memory_restart: '2G',
      out_file: '/dev/null',
      error_file: '/dev/null',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'PetStoreApi',
      script: 'src/index.js',
      instances: 8,
      exec_mode: 'cluster',
    },
  ],
};
