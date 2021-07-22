import * as React from "react";
import { Card, CardBody } from "reactstrap";
import userAvatar from "../../assets/images/avatar/1.png";

import "./Post";
export interface IPostProps {}

export default function Post(props: IPostProps) {
  const stylePrefix = "aw-posts";
  return (
    <Card>
      <CardBody>
        <div className={stylePrefix}>
          <div className={`${stylePrefix}--post`}>
            <div className={`${stylePrefix}--post-avatar`}>
              <img src={userAvatar} alt="Jeni Willams" />
            </div>
            <div className={`${stylePrefix}--post-detail`}>
              <div className={`${stylePrefix}--post-detail-header`}>
                <h4 className={`${stylePrefix}--post-detail-header-user-name`}>
                  Jeni Willams
                </h4>
                <span className={`${stylePrefix}--post-detail-header-time`}>
                  1hr ago
                </span>
              </div>

              <div className={`${stylePrefix}--post-detail-content`}>
                <p>
                  Aenean vestibulum venenatis justo et aliquet. Morbi consequat
                  quis sem vel sodales. Suspendisse consectetur dui sed
                  condimentum tincidunt. Etiam at lectus semper, ultrices magna
                  nec, accumsan elit. In hac habitasse platea dictumst. Nulla
                  facilisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
