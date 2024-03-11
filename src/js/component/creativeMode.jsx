import React, { useState  } from "react";

const creativeMode = () => {

const [imgLink, setImgLink] = useState("");
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [link, setLink] = useState("");

const [cardsInfo, setCardsInfo] = useState([]);

const cardAdd = (e) => {
    e.preventDefault();
    const newCard = {
        imgLink: imgLink,
        title: title,
        content: content,
        link: link,
    }
    setCardsInfo([...cardsInfo, newCard]);
    setImgLink("");
    setTitle("");
    setContent("");
    setLink("");
};

const cardDelete = (index) => setCardsInfo([...cardsInfo.slice(0, index), ...cardsInfo.slice(index + 1)]);


return (
<>
    <div className="d-flex flex-wrap justify-content-between">
    {
    (cardsInfo.length !== 0 ? cardsInfo : [{
        imgLink: "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg?w=1380&t=st=1710166958~exp=1710167558~hmac=806861196ca76ba90c435d0aee12f53906c795f3a3eb36da99be524a72b2c950",
        title: "Card Title",
        content: "Card Content",
        link: "#"
    }]).map((card, index) => (
        <div key={index} className="card text-center width-250 mb-4">
            <img src={card.imgLink || "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg?w=1380&t=st=1710166958~exp=1710167558~hmac=806861196ca76ba90c435d0aee12f53906c795f3a3eb36da99be524a72b2c950"} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
            </div>
            <div className="card-footer bg-light-grey">
                <a href={card.link || "#"} className="btn btn-primary">Find Out More!</a>
                <a href="#" onClick={() => cardDelete(index)} className="btn btn-danger">X</a>
            </div>
        </div>
    )/*close function*/
    )/*close .map*/
    }   
    </div>



    <form onSubmit={cardAdd}>
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Card image link</span>
            <input type="text" value={imgLink} onChange={(e) => setImgLink(e.target.value)} className="form-control" placeholder="You may leave this one empty" aria-label="Card image link" aria-describedby="basic-addon1" />
        </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Set Card Title</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" required placeholder="Set Card Title" aria-label="Card Title" aria-describedby="basic-addon1" />
        </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Set Card Content</span>
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" required placeholder="Set Card Content" aria-label="Card Content" aria-describedby="basic-addon1" />
        </div>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Find out more! link</span>
            <input type="text" value={link} onChange={(e) => setLink(e.target.value)} className="form-control" placeholder="You may leave this one empty" aria-label="Card image link" aria-describedby="basic-addon1" />
            <button className="btn btn-primary" type="submit" value="submit">Button</button>
        </div>
        </form>
</>
)/*close return*/};

export default creativeMode;