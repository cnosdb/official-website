
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home(): JSX.Element {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slider-container',
    arrows: false
  };
  return (
    <main className="container-main-zh">
      <div className="main-zh-header">
        <div className="main-background-overlay"></div>
        <div className="inner-container main-flex">
          <h2 className="header-title">
            始于万物互联，开元横跨五洲<br /><span className="spacer-inner"></span><br />云原生时序数据库CnosDB已全面开源，欢迎使用
          </h2>
          <Slider {...settings}>
            <div>
              <a className="href-box" href="https://docs.cnosdb.com/" target="_blank">
                <figure>
                  <img decoding="async" alt="CnosDB 2.0 云原生时序数据库" src="https://cn.cnosdb.com/wp-content/uploads/2022/11/CnosDB2.0-B站封面-221109-1024x569.png" />
                  <figcaption className="slider-carousel-caption">CnosDB 2.0 云原生时序数据库</figcaption>
                </figure>
              </a>
            </div>
            <div>
              <a className="href-box" href="https://docs.cnosdb.com/" target="_blank">
                <figure>
                  <img decoding="async" alt="CnosDB 捉虫竞赛" src="https://cn.cnosdb.com/wp-content/uploads/2022/04/CnosDB捉虫-3-4-1024x544.png" />
                  <figcaption className="slider-carousel-caption">CnosDB 捉虫竞赛</figcaption>
                </figure>
              </a>
            </div>
            <div>
              <a className="href-box" href="https://docs.cnosdb.com/" target="_blank">
                <figure>
                  <img decoding="async" alt="CnosDB 全球大使招募" src="https://cn.cnosdb.com/wp-content/uploads/2023/02/社区大使海报-CN-2-1024x578.png" />
                  <figcaption className="slider-carousel-caption">CnosDB 全球大使招募</figcaption>
                </figure>
              </a>
            </div>
          </Slider>
        </div>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col className="text-center widget-wrap">
            <img alt="" className="attachment-large" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/215_SW50ZXJuZXQgb2YgdGhpbmdzIGxhbmRpbmcgcGFnZQ-转换.svg" />
            <div className="widget-container">
              <div className="testimonial-content">"始于万物互联，开源横跨五洲"</div>
              <div className="testimonial-image">
                <img decoding="async" width="150" height="150" src="https://cn.cnosdb.com/wp-content/uploads/2022/04/未标题-2-150x150.png" className="attachment-thumbnail" alt="" />
                <div className="testimonial-name">CC小助手</div>
              </div>
            </div>
          </Col>
          <Col className="widget-wrap-right">
            <h2 className="heading-sub-title">CnosDB</h2>
            <p className="heading-desc">一款由社区驱动的高性能、高压缩率、高易用性的开源分布式时序数据库；支持超大数据规模、快速的批量写入、超高数据压缩比、丰富的计算函数和优秀的生态系统等功能特性；可用于DevOps（包括服务和服务器）监控、 IoT（包括物联网设备）监控、实时分析等场景。</p>
            <div className="text-center">
              <a href="https://cn.cnosdb.com/download/" target="_blank" className="button-link">性能强，超稳定，还开源~CnosDB，快来免费下载吧
                <svg className="icon-download" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5025" width="15" height="15"><path d="M768 768q0-14.857143-10.857143-25.714286t-25.714286-10.857143-25.714285 10.857143-10.857143 25.714286 10.857143 25.714286 25.714285 10.857143 25.714286-10.857143 10.857143-25.714286z m146.285714 0q0-14.857143-10.857143-25.714286t-25.714285-10.857143-25.714286 10.857143-10.857143 25.714286 10.857143 25.714286 25.714286 10.857143 25.714285-10.857143 10.857143-25.714286z m73.142857-128v182.857143q0 22.857143-16 38.857143t-38.857142 16H91.428571q-22.857143 0-38.857142-16t-16-38.857143v-182.857143q0-22.857143 16-38.857143t38.857142-16h265.714286l77.142857 77.714286q33.142857 32 77.714286 32t77.714286-32l77.714285-77.714286h265.142858q22.857143 0 38.857142 16t16 38.857143z m-185.714285-325.142857q9.714286 23.428571-8 40l-256 256q-10.285714 10.857143-25.714286 10.857143t-25.714286-10.857143L230.285714 354.857143q-17.714286-16.571429-8-40 9.714286-22.285714 33.714286-22.285714h146.285714V36.571429q0-14.857143 10.857143-25.714286t25.714286-10.857143h146.285714q14.857143 0 25.714286 10.857143t10.857143 25.714286v256h146.285714q24 0 33.714286 22.285714z" p-id="5026"></path></svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="container-bg">
        <Container>
          <h2 className="widget-container-title">我们拥有大批优秀的专业人才，强悍的科研实力，丰富的数据库产品经验</h2>
          <div className="divider-separator"></div>
          <Row>
            <Col className="widget-container">
              <div>
                <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/时序数据库：原理与实践-839x1024.jpg" />
              </div>
              <h3 className="heading-sub-title">产学研深度融合</h3>
              <p>作为基础软件皇冠上的明珠，数据库的发展需要人才、创新以及产学研用多方合作。</p>
            </Col>
            <Col className="widget-container">
              <div>
                <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/zhunli-1.png" />
              </div>
              <h3 className="heading-sub-title">16项时序数据库相关发明专利</h3>
              <p>我们极其重视技术的原创性、创新性，矢志不渝追求颠覆性成果。</p>
            </Col>
            <Col className="widget-container">
              <div>
                <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/papererading.png" />
              </div>
              <h3 className="heading-sub-title">12篇时序数据相关A级论文（包括VLDB）</h3>
              <p>我们积极参与国际评估，取得全球认可，也并努力向学术界、产业界社区反馈贡献。</p>
            </Col>
          </Row>
          <div className="spacer-inner"></div>
        </Container>
      </div>
      <div className="container-bg-e4e4f2">
        <Container>
          <Row>
            <Col lg={8} className="container-bg-e4e4f2-left">
              <h2 className="container-bg-e4e4f2-title">成为CnosDB的贡献者</h2>
              <p>在这里，无论是翻译、文档撰写、设计等非代码贡献，还是测试、写代码等代码贡献，都将视为宝贵的参与。在这里，你还会收获一个和谐、热心的开源社区，了解最前沿的技术领域。没有人会在意你是一位资深开发人员还是一名在校学生，真正重要的是你所做贡献的质量。还等什么？ 快来一起参与开源，传承开源精神吧。</p>
              <div>
                <a href="https://github.com/cnosdb/cnosdb/blob/main/CONTRIBUTING.md" target="_blank" className="button-link">CnosDB开源贡献指南
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4182" width="15" height="15"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="4183"></path></svg>
                </a>
              </div>
            </Col>
            <Col>
              <div className="circle"></div>
              <img src="https://cn.cnosdb.com/wp-content/uploads/2022/06/undraw_pair_programming_re_or4x-1.svg" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-bg container-bg-03004F">
        <div className="container-background-overlay"></div>
        <Container>
          <h2 className="widget-container-title">高性能、高压缩率、高易用性</h2>
          <div className="divider-separator"></div>
          <Row>
            <Col className="widget-container">
              <div>
                <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/Search-results-for-Compression-Flaticon.png" />
              </div>
              <h3 className="heading-sub-title">高性能</h3>
              <p>支持超大数据规模；快速批量写入；超高数据压缩比</p>
            </Col>
            <Col className="widget-container">
              <div>
                <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/Search-results-for-Distributed-Flaticon-1.png" />
              </div>
              <h3 className="heading-sub-title">高易用性</h3>
              <p>兼容主流时序数据库；丰富的计算函数；优秀的生态系统</p>
            </Col>
            <Col className="widget-container">
              <div>
                <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/Research-free-icon-2.png" />
              </div>
              <h3 className="heading-sub-title">全面拥抱开源</h3>
              <p>单机版，分布式版以及生态工具等，均采用AGPL-3.0开源协议</p>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}
