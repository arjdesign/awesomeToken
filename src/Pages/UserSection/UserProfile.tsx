import * as React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import avatar from "../../assets/images/avatar/big-1.png";
import Post from "../../Components/Post/Post";
import Header from "../../Components/Common/Header";
import VerticalMenu from "../../Components/Common/VerticalMenu";
import "./UserProfile.scss";
export interface IUserProfileProps {}

const stylePrefix = "aw-user-profile-page";
export default function UserProfile(props: IUserProfileProps) {
  return (
    <React.Fragment>
      <VerticalMenu isAdmin={false} />
      <Header isLogged={true} isAdmin={false} />
      <div className={stylePrefix}>
        <h3 className="mb-3">Profile</h3>

        <div className={`${stylePrefix}--container`}>
          <Row className="clearfix">
            <Col md="4" className={`${stylePrefix}--container-profile-teaser`}>
              <Card>
                <div
                  className={`${stylePrefix}--container-profile-teaser-header`}
                >
                  <div
                    className={`${stylePrefix}--container-profile-teaser-header-content`}
                  >
                    <h3>Jeni Willams</h3>
                    <div
                      className={`${stylePrefix}--container-profile-teaser-header-content-title mb-1`}
                    >
                      {" "}
                      JS Developer
                    </div>

                    <div>jeni@gmail.com</div>
                  </div>
                  <div
                    className={`${stylePrefix}--container-profile-teaser-header-avatar`}
                  >
                    <img
                      src={avatar}
                      alt="Jeni Willams"
                      className="avatar-md"
                    />
                  </div>
                </div>
                <CardBody
                  className={`${stylePrefix}--container-profile-teaser-content-body`}
                >
                  <dl>
                    <dt>Total Post</dt>
                    <dd>4</dd>
                  </dl>
                  <dl>
                    <dt>Reward</dt>
                    <dd>100</dd>
                  </dl>
                </CardBody>
              </Card>
            </Col>

            <Col md="8" className={`${stylePrefix}--container-posts`}>
              <h4>
                <i className="fas fa-comment-dots" /> Posts
              </h4>
              <Post />
              <Post />
              <Post />
              <Post />
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}
