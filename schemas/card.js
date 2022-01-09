export default {
  name: "card",
  type: "object",
  title: "Card",
  fields: [
    {
      name: "done",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "body",
      title: "Describe More",
      type: "blockContent",
      hidden: ({ parent, value }) => !parent?.done,
    },
  ],
};
