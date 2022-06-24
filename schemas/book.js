export default {
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "publisher",
      title: "Publisher",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "text"
    },
    {
      name: "ISBN",
      title: "ISBN",
      type: "string"
    },
    {
      name: "cover",
      title: "Cover Image",
      type: "image"
    }
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      publisher: "publisher"
    },
    prepare(selection) {
      const {title, author, publisher} = selection
      return {
        title: title,
        subtitle: author ? `${author} - ${publisher}` : `${publisher}`
      }
    }
  },
};
