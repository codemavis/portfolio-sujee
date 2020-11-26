import React from 'react';
import '../App.css';

import full_01 from '../images/fulls/01.jpg';
import full_02 from '../images/fulls/02.jpg';
import full_03 from '../images/fulls/03.jpg';
import full_04 from '../images/fulls/04.jpg';
import full_05 from '../images/fulls/05.jpg';
import full_06 from '../images/fulls/06.jpg';
import thumb_01 from '../images/thumbs/stock.jpg';
import thumb_02 from '../images/thumbs/crm.jpg';
import thumb_03 from '../images/thumbs/corrugation.jpg';
import thumb_04 from '../images/thumbs/package.jpg';
import thumb_05 from '../images/thumbs/webstore.jpg';
import thumb_06 from '../images/thumbs/education.jpg';


function Projects() {
    return (
        <section id="two">
            <h2>Main Projects</h2>
            <div className="row">
                <article className="col-6 col-12-xsmall work-item">
                    <a href={full_01} className="image fit thumb"><img src={thumb_01} alt="" /></a>
                    <h3>Stocks & Sales</h3>
                    <p>Inventory & warehouse management.</p>
                </article>
                <article className="col-6 col-12-xsmall work-item">
                    <a href={full_02} className="image fit thumb"><img src={thumb_02} alt="" /></a>
                    <h3>Customer Relations</h3>
                    <p>Marketing management, sales, customer service and support.</p>
                </article>
                <article className="col-6 col-12-xsmall work-item">
                    <a href={full_03} className="image fit thumb"><img src={thumb_03} alt="" /></a>
                    <h3>Manufacturing & Corrugation</h3>
                    <p>Job costing, order line, routing, project plan</p>
                </article>
                <article className="col-6 col-12-xsmall work-item">
                    <a href={full_04} className="image fit thumb"><img src={thumb_04} alt="" /></a>
                    <h3>Packaging and labeling</h3>
                    <p>Polythene packaging and extrusion process</p>
                </article>
                <article className="col-6 col-12-xsmall work-item">
                    <a href={full_05} className="image fit thumb"><img src={thumb_05} alt="" /></a>
                    <h3>Webstore development</h3>
                    <p>Webstore for wholesale & retail stores including online payment integration.</p>
                </article>
                <article className="col-6 col-12-xsmall work-item">
                    <a href={full_06} className="image fit thumb"><img src={thumb_06} alt="" /></a>
                    <h3>Educational Systems</h3>
                    <p>Registration, class schedules & invoicing.</p>
                </article>
            </div>
        
        </section>
    );
}

export default Projects; 