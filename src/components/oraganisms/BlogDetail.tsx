import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Blog } from "../../domain/model/blog/blog";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
  },
});

const BlogDetail: FC<{ blog: Blog }> = ({ blog }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">{blog.user.initial}</Avatar>}
          title={
            <Typography variant="h5" component="h2">
              {blog.title}
            </Typography>
          }
          subheader={blog.postDate}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {blog.body}
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          {blog.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">{comment.user.initial}</Avatar>
                  }
                  subheader={comment.postDate}
                />
                <CardContent>
                  <Typography variant="body2" component="p">
                    {comment.body}
                  </Typography>
                </CardContent>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogDetail;
