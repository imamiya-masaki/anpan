module.exports = {
    ci: {
        "collect": {
            numberOfRuns: 3, // Lighthouse の試行回数は3回
            startServerCommand: 'npm run start', // プロダクションモードでローカルサーバーを起動する
            "url": [
              "http://localhost:3000/",
            ]
          },
      upload: {
        target: 'filesystem',
        outputDir: './lhci'
      },
      "assert": {
        "assertions": {
            "categories:performance": ["warn", {"minScore": 0.95}],
            "categories:performance": ["error", {"minScore": 0.7}],
        }
      }
    },
  };