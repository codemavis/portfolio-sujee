import React, { useState } from 'react';
import '../App.css';

import emailjs from 'emailjs-com';





function Contact() {

	const [templateParams, setTemplateParams] = useState({
		'reply_to': '',
		'from_name': '',
		'to_name': '',
		'from_email': '',
		'message_html': ''
	})

	const sendEmail = (e) => {

		console.log('templateParams', templateParams);
		e.preventDefault();

		if (templateParams.from_name && templateParams.from_email && templateParams.message_html) {
			
			var service_id = "squirrel";
			var template_id = "template_bYKAoUmU";
			var user_id = "user_QH5vOWtcRBJBAATc1IR2t";
			emailjs.send(service_id, template_id, templateParams, user_id).then((response) => {
				console.log('SUCCESS!', response.status, response.text);

			}, (err) => {
				console.log('FAILED...', err);
			});
		}
	}

	const handleChange = (e) => {

		const newTemplateParams = { ...templateParams };

		switch (e.target.name) {
			case 'user-name':
				newTemplateParams.from_name = e.target.value;
				break;

			case 'user-email':
				newTemplateParams.from_email = e.target.value;
				break;

			case 'message':
				newTemplateParams.message_html = e.target.value;
				break;

			default:
				break;
		}

		newTemplateParams.to_name = 'Sujee';
		setTemplateParams(newTemplateParams);
	}

	return (
		<section id="three">
			<h2>Contact Me</h2>
			<p>There is no obligation. Lets have a chat!</p>
			<div className="row">
				<div className="col-8 col-12-small">
					<form onSubmit={sendEmail}>
						<div className="row gtr-uniform gtr-50">
							<div className="col-6 col-12-xsmall"><input type="text" name="user-name" id="user-name" placeholder="Name" onChange={handleChange} /></div>
							<div className="col-6 col-12-xsmall"><input type="email" name="user-email" id="user-email" placeholder="Email" onChange={handleChange} /></div>
							<div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4" onChange={handleChange}></textarea></div>
						</div>

						<ul className="actions">
							<li><input type="submit" value="Send Message" /></li>
						</ul>
					</form>
				</div>
				<div className="col-4 col-12-small">
					<ul className="labeled-icons">
						<li>
							<h3 className="icon solid fa-home"><span className="label">Address</span></h3>
							#38, Sri Gunalankara Mw<br />
							Kalubowila 10350<br />
							Sri Lanka
						</li>
						<li>
							<h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
							<a href="tel:94778181704">+9477-818-1704</a>
						</li>
						<li>
							<h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
							<a href="mailto:sathasivam.sujee@gmail.com">sathasivam.sujee@gmail.com</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Contact; 