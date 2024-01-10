
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
            <h2 className="heading-title">CnosDB</h2>
            <p className="heading-desc">一款由社区驱动的高性能、高压缩率、高易用性的开源分布式时序数据库；支持超大数据规模、快速的批量写入、超高数据压缩比、丰富的计算函数和优秀的生态系统等功能特性；可用于DevOps（包括服务和服务器）监控、 IoT（包括物联网设备）监控、实时分析等场景。</p>
            <div className="text-center">
              <a href="https://cn.cnosdb.com/download/" target="_blank" className="button-link">性能强，超稳定，还开源~CnosDB，快来免费下载吧
                <svg className="icon-download" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5025" width="15" height="15"><path d="M768 768q0-14.857143-10.857143-25.714286t-25.714286-10.857143-25.714285 10.857143-10.857143 25.714286 10.857143 25.714286 25.714285 10.857143 25.714286-10.857143 10.857143-25.714286z m146.285714 0q0-14.857143-10.857143-25.714286t-25.714285-10.857143-25.714286 10.857143-10.857143 25.714286 10.857143 25.714286 25.714286 10.857143 25.714285-10.857143 10.857143-25.714286z m73.142857-128v182.857143q0 22.857143-16 38.857143t-38.857142 16H91.428571q-22.857143 0-38.857142-16t-16-38.857143v-182.857143q0-22.857143 16-38.857143t38.857142-16h265.714286l77.142857 77.714286q33.142857 32 77.714286 32t77.714286-32l77.714285-77.714286h265.142858q22.857143 0 38.857142 16t16 38.857143z m-185.714285-325.142857q9.714286 23.428571-8 40l-256 256q-10.285714 10.857143-25.714286 10.857143t-25.714286-10.857143L230.285714 354.857143q-17.714286-16.571429-8-40 9.714286-22.285714 33.714286-22.285714h146.285714V36.571429q0-14.857143 10.857143-25.714286t25.714286-10.857143h146.285714q14.857143 0 25.714286 10.857143t10.857143 25.714286v256h146.285714q24 0 33.714286 22.285714z" p-id="5026"></path></svg>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 className="heading-title">我们拥有大批优秀的专业人才，强悍的科研实力，丰富的数据库产品经验</h2>
        <div className="widget-container">
          <div className="divider">
            <span className="divider-separator">
            </span>
          </div>
        </div>
        <Row>
          <Col>
            <div className="widget-container">
              <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/时序数据库：原理与实践-839x1024.jpg" />
            </div>
            <h3 className="heading-title">产学研深度融合</h3>
            <p>作为基础软件皇冠上的明珠，数据库的发展需要人才、创新以及产学研用多方合作。</p>
          </Col>
          <Col>
            <div className="widget-container">
              <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/zhunli-1.png" />
            </div>
            <h3 className="heading-title">16项时序数据库相关发明专利</h3>
            <p>我们极其重视技术的原创性、创新性，矢志不渝追求颠覆性成果。</p>
          </Col>
          <Col>
            <div className="widget-container">
              <img decoding="async" alt="" src="https://cn.cnosdb.com/wp-content/uploads/2022/06/papererading.png" />
            </div>
            <h3 className="heading-title">12篇时序数据相关A级论文（包括VLDB）</h3>
            <p>我们积极参与国际评估，取得全球认可，也并努力向学术界、产业界社区反馈贡献。</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
