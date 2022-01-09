export default {
  name: "goalpost",
  title: "Goal Post",
  type: "document",
  fields: [
    {
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: Date(),
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "fitness01",
      title: "50 days running/walking",
      type: "card",
    },
    {
      name: "fitness02",
      title: "Wake up by 4:30 am",
      type: "card",
    },
    {
      name: "fitness03",
      title: "Have 7-8 glasses of water everyday",
      type: "card",
    },
    {
      name: "recreational01",
      title: "Buy a new piano for Sachin",
      type: "card",
    },
    {
      name: "recreational02",
      title: "300 days piano",
      type: "card",
    },
    {
      name: "recreational03",
      title: "52 hindi songs to play proficiently",
      type: "card",
    },
    {
      name: "recreational04",
      title: "Complete 1 series of David Attenborough",
      type: "card",
    },
    {
      name: "recreational05",
      title: "Learn to make 5 sukha sabjis",
      type: "card",
    },
    {
      name: "recreational06",
      title: "Cooking - learn 5 dishes to make",
      type: "card",
    },
    {
      name: "recreational07",
      title: "Make Khushboo drive alone on traffic roads",
      type: "card",
    },
    {
      name: "work01",
      title: "Regulate timings as 10:00 am - 6:30 pm",
      type: "card",
    },
    {
      name: "work02",
      title: "Successfully complete and deliver 3 homes",
      type: "card",
    },
    {
      name: "religious01",
      title: "Go to temple 48 days in the year and do Puja atleast once",
      type: "card",
    },
    {
      name: "religious02",
      title: "Learn 2 lines of pratrikaman every day",
      type: "card",
    },
    {
      name: "home01",
      title: "Learn one new thing everyday",
      type: "card",
    },
    {
      name: "travel01",
      title: "To make a list of relatives to meet",
      type: "card",
    },
    {
      name: "travel02",
      title: "Visit old family friends",
      type: "card",
    },
    {
      name: "sharing01",
      title: "Create a library for Sunnyside",
      type: "card",
    },
    {
      name: "sharing02",
      title: "Creating a simple digital library",
      type: "card",
    },
    {
      name: "sharing03",
      title: "Learn and Teach the Rubik’s cube",
      type: "card",
    },
    {
      name: "sharing04",
      title: "Create an impact in the environment through landscapers",
      type: "card",
    },
    {
      name: "sharing05",
      title: "Train 1 staff for management level candidature",
      type: "card",
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
    },
    prepare(selection) {
      const { date } = selection;
      return Object.assign({}, selection, {
        subtitle: `${date}`,
      });
    },
  },
};
