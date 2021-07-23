import * as React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import Header from "../../../Components/Common/Header";
import VerticalMenu from "../../../Components/Common/VerticalMenu";
import "./CreateUser.scss";

export interface ICreateUserProps {}

const stylePrefix = "aw-create-user";

export default function CreateUser(props: ICreateUserProps) {
  const history = useHistory();
  const handleCreateUser = (event: any) => {
    event.preventDefault();
    history.push("/admin/users");
  };
  return (
    <React.Fragment>
      <VerticalMenu isAdmin={true} />
      <Header isLogged={true} isAdmin={true} />

      <div className={stylePrefix}>
        <h3 className="mb-3">Create New User</h3>

        <Card>
          <CardBody>
            <Form onSubmit={(e) => handleCreateUser(e)}>
              <FormGroup className="mb-3 row">
                <Label className="col-sm-2 col-form-label" for="first_name">
                  First Name
                </Label>
                <div className="col-sm-10">
                  <Input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter user first name"
                  />
                </div>
              </FormGroup>

              <FormGroup className="mb-3 row">
                <Label className="col-sm-2 col-form-label" for="last_name">
                  Last Name
                </Label>
                <div className="col-sm-10">
                  <Input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter user last name"
                  />
                </div>
              </FormGroup>

              <FormGroup className="mb-3 row">
                <Label className="col-sm-2 col-form-label" for="email">
                  Email
                </Label>
                <div className="col-sm-10">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter user email"
                  />
                </div>
              </FormGroup>

              <FormGroup className="mb-3 row">
                <Label className="col-sm-2 col-form-label" for="public_address">
                  Whitelist address
                </Label>
                <div className="col-sm-10">
                  <Input
                    type="text"
                    id="public_address"
                    name="public_address"
                    placeholder="Enter user public address"
                  />
                </div>
              </FormGroup>

              <div className="d-flex flex-row-reverse">
                <Button type="submit" className="btn btn-aw-primary">
                  Submit
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
}
