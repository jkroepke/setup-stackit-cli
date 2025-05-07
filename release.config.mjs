/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [{ type: 'chore', scope: 'deps', release: 'patch' }]
      }
    ],
    [
      '@semantic-release/github',
      {
        successComment: false,
        labels: false,
        addReleases: false
      }
    ]
  ]
}
