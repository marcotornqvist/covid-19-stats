import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="row">
        <div className="col-xl-4 col-lg-6">
          <div className="option">
            <div className="wrapper">
              <h2>What is Covid-19?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, veniam impedit? Blanditiis sapiente praesentium quo
                molestias quasi sequi eaque nemo voluptate nobis, nulla, labore,
                dolore nesciunt obcaecati aspernatur? Reiciendis nisi maxime
                eius aspernatur at accusantium quo nesciunt quod a! Sint,
                molestiae. Dolor similique nesciunt maxime.
              </p>
            </div>
            <Link to="/info">
              <button>Learn about Covid-19</button>
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="option">
            <div className="wrapper">
              <h2>Statistics</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptatum sint temporibus consequuntur praesentium nobis at
                explicabo repellat qui itaque consequatur, odio architecto
                numquam illum suscipit voluptatibus aliquid fugit magni ducimus
                aspernatur tempora eligendi quo ratione recusandae. Quidem
                delectus omnis hic, facilis consectetur illo esse quo ipsum rem
                qui blanditiis.
              </p>
            </div>
            <Link to="/statistics">
              <button>Check Statistics</button>
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="option">
            <div className="wrapper">
              <h2>Survey</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                non incidunt ex fuga nihil rem similique, vero optio error velit
                nobis fugit corporis id aperiam nisi, porro iusto? Repudiandae
                obcaecati natus architecto nesciunt voluptatibus odit neque
                consectetur, consequatur veritatis explicabo.
              </p>
            </div>
            <Link to="/survey">
              <button>Take Survey</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
