import React, { useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from "reactstrap";
import "./Login.scss";
import logo from "../../../assets/images/logo.svg";

export interface ILoginProps {}
const stylePrefix = "aw-auth-login";

export default function Login(props: ILoginProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);
  };

  return (
    <div className={stylePrefix}>
      <Container className={`${stylePrefix}-container`}>
        <Row className="justify-content-center mb-5">
          <Col md="4">
            <img
              src={logo}
              alt="Wall of Awesome"
              className={`${stylePrefix}-container--logo mb-4`}
            />
            <h3 className={`${stylePrefix}-container--title`}>
              #WallOfAwesome
            </h3>

            <Card className="mt-5">
              <CardBody>
                <Form
                  className={`${stylePrefix}-container--form`}
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <h3 className="mb-5">Welcome Back</h3>

                  {error ? <Alert color="danger"> {error} </Alert> : ""}

                  <FormGroup className="mb-3">
                    <Label for="email">Username</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <Label for="password">Pasword</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <Button
                    type="submit"
                    className="btn btn-aw-primary full-width"
                    disabled={loading}
                  >
                    {loading ? (
                      <i className="bx bx-loader bx-spin font-size-16 align-middle me-2">
                        {" "}
                      </i>
                    ) : (
                      ""
                    )}
                    LOGIN
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
