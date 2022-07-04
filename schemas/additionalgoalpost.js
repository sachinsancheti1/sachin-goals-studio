export default {
  name: "additionalgoalpost",
  title: "Additional Goal Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    }
  },
};
