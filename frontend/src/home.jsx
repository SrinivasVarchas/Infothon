import React from 'react';
import './assets/style.css';

function App() {
    return (
        <div>
            {/* Navbar Starts from Here */}
            <nav className="navbar">
                <img className="danny" src="Images/footerLogo.png" alt="" />
                <div className="varchas"><h2>VEDIC WHISPERS</h2></div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Indian Folktales</a></li>
                    <li><a href="#">Indian Mythology</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>

            {/* Home Section Starts from Here */}
            <section id="home">
                <div className="divider">
                    <div className="home-left">
                        <h1 className="h-primary color-primary">Tales of Valor</h1>
                        <h2 className="h-secondary color-primary">
                            "Embark on a mystical journey through the heart of India with our enchanting collection of folktales and mythology"
                            Discover the rich tapestry of Indian culture as you explore tales of gods and goddesses, valiant heroes, and magical creatures. Each story is a window into the vibrant traditions and timeless lessons that have shaped this land. Join us in celebrating the spirit of India, where every tale weaves a spell of wonder and delight. Your adventure into the world of Indian folklore starts here!"
                        </h2>
                        <br />
                    </div>
                    <img className="burger-home" src="Images/burger.png" alt="" />
                </div>
            </section>

            {/* Main Section Starts from Here */}
            <section id="main" className="home-bottom">
                <div className="bottom-container">
                    <div className="home-bottom-left"></div>
                    <div className="home-bottom-right">
                        <img src="Images/img1.jpg" alt="" />
                        <img src="Images/img1.jpg" alt="" />
                    </div>
                </div>
            </section>

            {/* Center Section Starts from Here */}
            <section className="center-div" id="food">
                <h2 className="h-secondary center btn-heading">ALWAYS TESTY BURGERS</h2>
                <h1 className="center color-primary center-heading">CHOOSE & ENJOY</h1>
                <p className="center para-font">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias libero laboriosam pariatur quo quisquam veritatis doloremque, <br /> aliquam dolorum quod dignissimos, sunt quas tenetur perferendis adipisci. Ab accusantiatur. Quaerat.
                </p>
                <div className="burger-container">
                    <div className="burger-item">
                        <img src="Images/burger2.png" alt="" />
                        <h2 className="center color-primary burger-heading">Indian Folktales</h2>
                        <p className="center">
                            Dive into a diverse collection of Indian folktales,<br /> where timeless narratives unfold,<br />
                            weaving together enchanting stories that span themes, regions, and genres.
                        </p>
                        <a href="redirect.html" className="order-btn">Explore More</a>
                    </div>
                    <div className="burger-item">
                        <img src="Images/burger.png" alt="" />
                        <h2 className="center color-primary burger-heading">Indian Mythology</h2>
                        <p className="center">
                            Explore the timeless tales of <br />gods, goddesses, and epic adventures<br />in our Indian Mythology section
                        </p>
                        <a href="redirect.html" className="order-btn">Explore More</a>
                    </div>
                </div>
            </section>

            {/* Event Section Starts from Here */}
            <section id="event-container">
                <div className="event-item">
                    <div className="event-content">
                        <h2 className="normal-hading color-primary">OUR MOTIVE</h2>
                        <p className="event-para para-font">
                            Welcome to our captivating digital realm, where the rich tapestry of Indian folklore and mythology unfolds in a kaleidoscope of themes, regions, and genres. Immerse yourself in a treasure trove of enchanting tales that traverse the diverse landscapes of India, each narrative woven with cultural nuances and timeless wisdom. From the mystical realms of gods and goddesses to the rustic charm of regional folklore, our website invites you on a journey through the heart of Indian storytelling. Explore the magic of mythology, discover hidden gems from distinct regions, and delve into the myriad genres that make Indian folklore a tapestry of vibrant narratives. Join us in celebrating the timeless allure of India's storytelling traditions.
                        </p>
                    </div>
                    <img src="Images/eventBurger.jpg" alt="" />
                </div>
            </section>

            {/* Footer Location Section Starts from Here */}
            <section id="burger-footer">
                <div className="footer-bg">
                    <div className="left-footer">
                        <img src="Images/footerLogo.png" alt="" />
                        <p className="color-white para-font">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quas, optio. Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Veniam, totam? Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Ea, molestiae.br Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, perspiciatis?
                        </p>
                    </div>
                    <div className="right-footer color-white footer-font">
                        Mumbai, Maharashtra, India<br />
                        contact.geekshelp@gmail.com
                    </div>
                </div>
            </section>

            {/* Footer Starts from Here */}
            <footer className="center footer"> &copy; LOADS OF LOGIC 2021-22. ALL RIGHTS RESERVED</footer>
        </div>
    );
}

export default App;
