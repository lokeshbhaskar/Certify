import aws from "../assets/aws.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import python from "../assets/python.png";
import mongo from "../assets/mongo.png";
import fulls from '../assets/fullstack.png'

const certifications = [
  {
    title: "Frontend Developer",
    by: "by Certify",
    image: frontend,
    route: "/certifications/frontend",
  },
  {
    title: "Fullstack Developer",
    by: "by Certify",
    image: fulls,
    route: "/certifications/fullstack",
  },
  {
    title: "MERN Stack Developer",
    by: "by Certify",
    image: mongo,
    route: "/certifications/mern",
  },
  {
    title: "Backend Developer",
    by: "by Certify",
    image: backend,
    route: "/certifications/backend",
  },
  {
    title: "Python Developer",
    by: "by Certify",
    image: python,
    route: "/certifications/python",
  },
  {
    title: "AWS Certification",
    by: "by Certify",
    image: aws,
    route: "/certifications/aws",
  },
];

export default certifications