import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ProjectCard = ({ title, description, link }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button variant="outline" asChild>
        <a href={link}>詳細を見る</a>
      </Button>
    </CardFooter>
  </Card>
);

export default ProjectCard;
