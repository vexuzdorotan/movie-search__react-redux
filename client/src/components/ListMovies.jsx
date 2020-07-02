import React, { Fragment } from 'react';

const ListMovies = () => {
  return (
    <Fragment>
      <section id="list-movie">
        <div className="bg-dark text-center py-5 mt-5">
          <div className="container">
            <div className="row">
              <div className="card-columns">
                <div className="card">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">
                      Card title that wraps to a new line
                    </h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ListMovies;
