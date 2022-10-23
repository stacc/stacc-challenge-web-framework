import Task0 from "./Task0";

export const getTasks = (props = {}) => [
  {
    id: 0,
    title: "1. Example Task",
    Component: <Task0 {...props} />,
    description: "Example description",
  },
];
