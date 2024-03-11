import React from 'react';

const Cards = () => {
    let cardAmount = 8;

    return (
        <>
            <div className="d-flex flex-wrap justify-content-between">
                {Array(cardAmount).fill(true).map((_, index) =>
                    <div className="card text-center width-250 mb-4" key={index}>
                        <img src="https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer bg-light-grey">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                )}
            </div>
        </>
	);
};

export default Cards;