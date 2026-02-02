export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  highlights: string[];
  date: string;
}

export const projects: Project[] = [
  {
    id: "cinequest",
    title: "CineQuest",
    subtitle: "Microservices Movie Platform",
    description:
      "A distributed microservice-based platform for movie discovery and notifications with clear service boundaries and architectural trade-off analysis.",
    techStack: ["Microservices", "Kubernetes", "Kafka", "gRPC", "React", "Redis", "Docker"],
    githubUrl: "https://github.com/Shelly892/CineQuest.git",
    image: "/projects/cinequest.png",
    highlights: [
      "Designed and implemented distributed microservice architecture with clear service boundaries",
      "Developed Movie Service integrating TMDB API with Redis caching to reduce latency",
      "Implemented Notification Service consuming Kafka events for asynchronous email delivery",
      "Built complete React frontend integrated via centralized API Gateway",
      "Containerized and deployed using Docker and Kubernetes",
    ],
    date: "December 2025",
  },
  {
    id: "smarttrip-nyc",
    title: "SmartTrip NYC",
    subtitle: "Full-Stack Travel Platform",
    description:
      "A comprehensive travel planning platform with authentication flows, ML-powered recommendations, and production deployment infrastructure.",
    techStack: ["React", "Spring Boot", "Flask", "PostgreSQL", "Docker", "Nginx", "JWT", "OAuth"],
    githubUrl: "https://github.com/Shelly892/SmartTripNYC.git",
    image: "/projects/smarttrip.png",
    highlights: [
      "Led system maintenance phase, coordinating frontend, backend, and ML teams",
      "Implemented JWT-based login/logout and Google OAuth integration",
      "Managed bug fixes and feature requests following agile practices",
      "Maintained production deployment using Docker Compose, Nginx, and CI/CD pipelines",
    ],
    date: "July 2025",
  },
  {
    id: "dublin-bikeshare",
    title: "Dublin BikeShare App",
    subtitle: "Real-time Bike Availability",
    description:
      "Web application displaying real-time Dublin bike availability and weather conditions with predictive analytics for peak usage forecasting.",
    techStack: ["Flask", "JavaScript", "HTML/CSS", "REST", "AWS EC2", "Chart.js", "Google Maps API"],
    githubUrl: "https://github.com/Shelly892/Bike-app-repository.git",
    image: "/projects/bikeshare.png",
    highlights: [
      "Integrated Google Maps API for geospatial data and real-time availability heatmaps",
      "Implemented predictive analytics charts using historical data",
      "Designed and built user interface based on user stories",
      "Successfully deployed on AWS EC2",
      "Facilitated agile practices, managed project timeline and task allocation",
    ],
    date: "May 2025",
  },
  {
    id: "heart-disease-analytics",
    title: "Heart Disease Risk Analytics",
    subtitle: "ML-Powered Health Dashboard",
    description:
      "Analytics dashboard leveraging big data and machine learning for heart disease risk prediction with interactive visualizations.",
    techStack: ["Hadoop", "Hive SQL", "JavaScript", "Linear Regression", "Logistic Regression", "Random Forest"],
    githubUrl: "https://github.com/Shelly892",
    image: "/projects/analytics.png",
    highlights: [
      "Analyzed 10,000+ records with data cleaning and feature engineering",
      "Built multiple ML models achieving 93% accuracy in risk prediction",
      "Created visualizations communicating complex findings to non-technical stakeholders",
    ],
    date: "November 2025",
  },
];
