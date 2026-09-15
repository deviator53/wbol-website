export default {
  name: 'post',
  title: 'News & Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Event', value: 'event' },
          { title: 'Project Update', value: 'project' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'coverVideo',
      title: 'Cover Video URL (YouTube / Vimeo)',
      type: 'url',
      description: 'If set, this will replace the cover image with an embedded video.',
    },
    {
      name: 'coverVideoFile',
      title: 'Cover Video Upload',
      type: 'file',
      options: { accept: 'video/*' },
      description: 'Upload a video file to use as the cover instead of an image or URL.',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
        {
          type: 'object',
          name: 'videoEmbed',
          title: 'Video Embed (YouTube / Vimeo)',
          fields: [
            {
              name: 'url',
              title: 'YouTube / Vimeo URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption (optional)',
              type: 'string',
            },
          ],
          preview: {
            select: { title: 'url' },
            prepare({ title }) {
              return { title: '🎬 Embed', subtitle: title }
            },
          },
        },
        {
          type: 'object',
          name: 'videoUpload',
          title: 'Video Upload',
          fields: [
            {
              name: 'file',
              title: 'Video File',
              type: 'file',
              options: { accept: 'video/*' },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption (optional)',
              type: 'string',
            },
          ],
          preview: {
            select: { title: 'caption', file: 'file' },
            prepare({ title }) {
              return { title: '📹 Uploaded Video', subtitle: title || '' }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
}
