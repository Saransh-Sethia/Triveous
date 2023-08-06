import React, {useState,useEffect} from 'react';
import './News.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
const [news, setNews] = useState([]);
    useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=defc48fb054f4f0590915bae7cd8a726")
    .then((res)=>{
        console.log(res.data.articles);
        setNews(res.data.articles);
    })
    },[]);


  return (
<>
            <Row xs={1} md={2} className="row my-2" >
            {news.map((val, idx) => (
              <Col key={idx} className="col my-3">
                <Card className="card" style={{width:"38rem"}}>
                  <Card.Img variant="top" src={val.urlToImage} />
                  <Card.Body>
                    <Card.Title><h2>{val.title}</h2></Card.Title>
                    <Card.Text>
{val.description}
                    </Card.Text>
                    <Button variant="primary" href={val.url}>Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
</>
  )
}

export default  News;