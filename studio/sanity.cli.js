import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wz5xg0a5',
    dataset: 'production'
  },
  deployment: {
    appId: 'kbg0e1vptfsjzkivuos4mbpp',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  }
})
