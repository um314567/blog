import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => {
  return (
    <div id="page-header" className="mb-3">
      <Row>
        <Col md="6" sm="auto" className="text-center m-auto">
          <h1>Read Our Blog</h1>
          <p>Harry(세종)의 사이드 프로젝트 작업 블로그입니다</p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
