import * as React from "react";
import { Card, CardBody, Form, Input, Button } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";
import Header from "../../Components/Common/Header";
import VerticalMenu from "../../Components/Common/VerticalMenu";
import Post from "../../Components/Post/Post";
import "./WallOfAwesome.scss";
export interface IWallOfAwesomeProps {}
const stylePrefix = "aw-wall-of-awesome";
export default function WallOfAwesome(props: IWallOfAwesomeProps) {
  return (
    <React.Fragment>
      <VerticalMenu isAdmin={false} />
      <Header isLogged={true} isAdmin={false} />
      <div className={stylePrefix}>
        <Form className={`${stylePrefix}--form mb-5`}>
          <Card className={`${stylePrefix}--form-card`}>
            <CardBody>
              <TextareaAutosize
                name="post-content"
                id="post-content"
                className={`${stylePrefix}--form-card-post-field`}
                placeholder="Write..."
              />
            </CardBody>
          </Card>
          <div className="d-flex justify-content-between">
            <div className={`${stylePrefix}--form-card-post-tag-friend`}>
              <Input
                type="text"
                name="tag-friend"
                id="tag-friend"
                placeholder="Tag Friend"
                className={`${stylePrefix}--form-card-post-tag-friend-field`}
              />
            </div>

            <Button type="submit" className="btn btn-aw-primary">
              Post
            </Button>
          </div>
        </Form>

        <div>
          <h4>
            <i className="fas fa-comment-dots" /> Posts
          </h4>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </React.Fragment>
  );
}
