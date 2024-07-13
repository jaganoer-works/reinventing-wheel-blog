import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface BlogPostProps {
  title: string;
  date: string;
  summary: string;
}

const BlogPost = ({ title, date, summary }: BlogPostProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{date}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{summary}</p>
    </CardContent>
    <CardFooter>
      <Button variant="link" asChild>
        <a href="#">続きを読む</a>
      </Button>
    </CardFooter>
  </Card>
);

export default BlogPost;
