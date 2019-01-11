
# Why object oriented is important ?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

# Should is start learning OOP ?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.






# The benefits of knowing the prototypal inheritance in Javascript

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

```js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';

import banner from './images/banner.png';
import responsiveDesign from './images/responsive-design.png';
import mobileApp from './images/mobile-website.png';
import tabletApp from './images/tablet-website.png';

import projectsIcon from './images/projects-icon.svg';
import blogPostsIcon from './images/blog-posts-icon.svg';
import profileIcon from './images/profile-icon.svg';
import headerImg from './images/header-img.png';

import './home.less';


class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<main className="home__main">
			 <header className="app_main__section-header">
			   <div className="app_main__section__header-intro">
			   	<div className="app_main__section__header__intro-title">
			     <h1>I'm a junior front end developer based in london.</h1>
			    </div>
			    <div className="app_main__section__header__intro-bio">
			   	 <p>Nunc massa eros, vestibulum nec magna quis, ultricies pulvinar ante. Nunc massa eros, vestibulum nec magna quis, ultricies pulvinar ante. <Link to="/">read more</Link> </p>
			    </div>
			    <div className="app_main__section__header__intro-image">
			     <img src={headerImg}/>
			    </div>
			   </div>
			  </header>
			  <section className="app_main__section-links">
			  	<div className="app_main__section__links-link view-projects">
			  	 <div className="app_main__section__links__link-img">
			  	  <img src={projectsIcon}/>
			      <Link to="/" className="img-wrapper">
				   <i className="fas fa-search-plus fa-2x"></i>
			      </Link>
			  	 </div>
			  	 <div className="app_main__section__links__link-button">
			  	  <Link to="#">View projects</Link>
			  	 </div>
			  	</div>
			  	<div className="app_main__section__links-link view-posts">
			  	 <div className="app_main__section__links__link-img">
			  	  <img src={blogPostsIcon}/>
			      <Link to="/" className="img-wrapper">
				   <i className="fas fa-search-plus fa-2x"></i>
			      </Link>
			  	 </div>
			  	 <div className="app_main__section__links__link-button">
			  	  <Link to="#">View posts</Link>
			  	 </div>
			  	</div>
			  	<div className="app_main__section__links-link view-profile">
			  	 <div className="app_main__section__links__link-img">
			  	  <img src={profileIcon}/>
			      <Link to="/" className="img-wrapper">
				   <i className="fas fa-search-plus fa-2x"></i>
			      </Link>
			  	 </div>
			  	 <div className="app_main__section__links__link-button">
			  	  <Link to="#">View profile</Link>
			  	 </div>
			  	</div>
			  </section>	
			</main>
		)
	}
}

export default Home; 
```

```css
@import '../defaults.less';
@import '../sizes.less';



.app_main__section-header {
	margin: 10px;
	flex-grow: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	background-image: url('./images/banner.png');
	background-position: center;
	background-size: cover;
	height: auto;
	overflow: hidden;

	.app_main__section__header-intro {
		margin: 10px;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-basis: 700px;

		.app_main__section__header__intro-title {
			margin: 0;
			padding: 0;
			height: auto;
			
			h1 {
				font-size: 3.5em;
				font-weight: bold;
				font-family: "Roboto", sans-serif;
				color: #fff;

				// Tablet
				@media only screen and (max-width: @sizes[large]) {
					font-size: 2.8em;
				}

				// Tablet
				@media only screen and (max-width: @sizes[medium]) {
					font-size: 2.5em;
				}

				// mobile
				@media only screen and (max-width: @sizes[small]) {
					font-size: 1.7em;
				}
			}
		}
		
		.app_main__section__header__intro-image {
			margin: 0;
			padding: 0;

			img {
				width: 100%;
				height: auto;
			}
		}

		.app_main__section__header__intro-bio {
			margin: 0;
			padding: 0;
			
			p {
				font-size: 1.5em;
				font-family: sans-serif;
				color: #fff;

				a {
					color: #3c2778;
					text-decoration: underline;
				}

				// Tablet
				@media only screen and (max-width: @sizes[extra_large]) {
					font-size: 1.05em;
				}
				// Tablet
				@media only screen and (max-width: @sizes[large]) {
					font-size: 1.1em;
				}

				// Tablet
				@media only screen and (max-width: @sizes[medium]) {
					font-size: 1.1em;
				}

				// mobile
				@media only screen and (max-width: @sizes[small]) {
					font-size: 1em;
				}
			}
		}
		

		// extra large (desktop)
		@media only screen and (max-width: @sizes[extra_large]) {
			
		}
		// large (laptop)
		@media only screen and (max-width: @sizes[large]) {
			
		}

		// Tablet
		@media only screen and (max-width: @sizes[medium]) {

		}

		// mobile
		@media only screen and (max-width: @sizes[small]) {
			
		}
	}

	&:hover {
		.app_main__section__header-img {

		}

		.app_main__section__header-intro {

		}
	}
	
	@media only screen and (max-width: @sizes[extra_large]) {
		flex-basis: 500px;
	}
	
	@media only screen and (max-width: @sizes[large]) {
		
	}

	@media only screen and (max-width: @sizes[medium]) {
		flex-direction: column;
		margin: 7.5px;
	}

	@media only screen and (max-width: @sizes[small]) {
		flex-direction: column;
		margin: 5px;
	}
}

.app_main__section-links {
	margin: 0;
	padding: 0;
	width: 100%;
	flex-grow: 1;
	flex-basis: 350px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-start;
	

	.app_main__section__links-link {
		flex-grow: 1;
		margin: 10px;
		flex-basis: 300px;
		
		.app_main__section__links__link-img {
			position: relative;
			width: 100%;
			flex-grow: 1;
			flex-basis: 100px;
			max-height: 400px;
			text-align: center;
			img {
				height: 100%;
				width: 100%;
			}
			&:hover {
			.img-wrapper {
				text-decoration: none;
				height: 100%;
				width: 100%;
				border-radius: 0%;
				transition: all .3s ease-in-out;
				}
			}

			.img-wrapper {
				position: absolute;
				bottom: 0;
				right: 0;
				background: rgba(60, 39, 120, .8);
				height: 0;
				width: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				overflow: hidden;
				border-radius: 100% 0 100% 0;
				transition: all .3s ease-in-out;
				i {
					color: #fff;
				}
			}
		}

		.app_main__section__links__link-button {
			position: relative;
			width: 100%;
			flex-grow: 0;
			flex-basis: 200px;
			text-align: center;
			a {
				padding: 20px 0;
				display: block;
				border-top: 4px solid #f1f1f1;
				background: #8B5FAB;
				width: 100%;
				color: #fff;
				font-weight: bold;
				text-decoration: none;
				transition: background .2s ease-in-out;

				@media only screen and (max-width: @sizes[medium]) {
					padding: 15px 0;
				}

				// mobile
				@media only screen and (max-width: @sizes[small]) {
					padding: 10px 0;
				}
			
				&:hover {
					background: rgba(60, 39, 120, 1);
					transition: background .2s ease-in-out;
				}

				&:focus {
					background: rgba(60, 39, 120, 1);
					transition: background .2s ease-in-out;
				}
			}
		}

		@media only screen and (max-width: @sizes[large]) {
			margin: 7.5px;
		}

		@media only screen and (max-width: @sizes[medium]) {
			margin: 7.5px;
		}

		// mobile
		@media only screen and (max-width: @sizes[small]) {
			margin: 5px;
		}

	}
}
```