const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Design Homepage",
        task_description: "Create the homepage design using Figma.",
        task_date: "2024-10-21",
        task_categories: "UI/UX",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Client Meeting",
        task_description: "Discuss the project requirements with the client.",
        task_date: "2024-10-15",
        task_categories: "Meeting",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "Backend API",
        task_description: "Develop API for user management.",
        task_date: "2024-10-18",
        task_categories: "API",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Write Unit Tests",
        task_description:
          "Write unit tests for the payment gateway integration.",
        task_date: "2024-10-22",
        task_categories: "Testing",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Prepare Presentation",
        task_description: "Create a presentation for the new project proposal.",
        task_date: "2024-10-16",
        task_categories: "Proposal",
      },
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        task_title: "Fix UI Bugs",
        task_description: "Fix layout issues in the dashboard.",
        task_date: "2024-10-20",
        task_categories: "UI/UX",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Create Database Schema",
        task_description: "Design the database schema for the new project.",
        task_date: "2024-10-12",
        task_categories: "Development",
      },
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Frontend Development",
        task_description: "Implement the new login page using React.",
        task_date: "2024-10-22",
        task_categories: "Frontend",
      },
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        task_title: "Code Review",
        task_description: "Review the codebase for the authentication system.",
        task_date: "2024-10-19",
        task_categories: "Review",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Team Meeting",
        task_description: "Discuss the sprint progress with the team.",
        task_date: "2024-10-14",
        task_categories: "Communication",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Market Research",
        task_description: "Conduct research on competitor products.",
        task_date: "2024-10-22",
        task_categories: "Strategy",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Update Documentation",
        task_description: "Update the project documentation with new features.",
        task_date: "2024-10-16",
        task_categories: "Development",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        new_task: false,
        completed: false,
        failed: false,
        task_title: "Test Deployment",
        task_description: "Test the production deployment for the release.",
        task_date: "2024-10-21",
        task_categories: "Testing",
      },
      {
        active: true,
        new_task: true,
        completed: false,
        failed: false,
        task_title: "Write Blog Post",
        task_description: "Write a blog post on the latest tech trends.",
        task_date: "2024-10-23",
        task_categories: "Writing",
      },
      {
        active: false,
        new_task: false,
        completed: true,
        failed: false,
        task_title: "Client Demo",
        task_description: "Demonstrate the new features to the client.",
        task_date: "2024-10-14",
        task_categories: "Client",
      },
      {
        active: false,
        new_task: false,
        completed: false,
        failed: true,
        task_title: "API Integration",
        task_description: "Integrate third-party API for payment.",
        task_date: "2024-10-18",
        task_categories: "Development",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
