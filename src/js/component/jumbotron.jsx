import React from 'react';

const Jumbotron = () => {
    return (
        <>
            <div className="jumbotron p-4 bg-secondary mb-4 text-white">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum elit et ex imperdiet, eu fringilla lectus imperdiet. In aliquet orci vitae risus vulputate ultricies. Ut sit amet purus et lorem blandit tempus. Vivamus nec lobortis nulla, ut iaculis est. Maecenas eget velit elementum, interdum quam ac, fermentum sem. Maecenas vitae porttitor orci. Aliquam in sapien diam.</p>
                <p className="lead">
                    <a class="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
                </p>
            </div>
        </>
	);
};

export default Jumbotron;