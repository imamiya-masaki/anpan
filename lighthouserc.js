module.exports = {
    ci: {
        "collect": {
            numberOfRuns: 1, // Lighthouse の試行回数は1回
            startServerCommand: 'npm run start', // プロダクションモードでローカルサーバーを起動する
            "url": [
              "http://localhost:3000/",
            ]
          },
      upload: {
        target: 'temporary-public-storage',
        outputDir: './lhci'
      },
    },
  };