import React, { useEffect, useRef } from 'react';
import './Trending2.css';

const Trending2 = ({ products }) => {

    const scrollRef = useRef(null);

    useEffect(() => {
        let isScrolling;

        const startScroll = () => {
            if (scrollRef.current) {
                const card = scrollRef.current.querySelector('.trending-card');
                if (card) {
                    const cardWidth = card.offsetWidth; // Get the width of the card
                    const gap = 10; // The gap between cards as per your CSS
                    const scrollDistance = cardWidth + gap; // Total distance to scroll to show the next card

                    const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                    const newScrollPosition = scrollRef.current.scrollLeft + scrollDistance;

                    if (newScrollPosition < maxScrollLeft) {
                        smoothScroll(scrollRef.current, newScrollPosition, 1000);
                    } else {
                        smoothScroll(scrollRef.current, 0, 800); // Return to start more slowly
                    }
                }
            }
        };

        const smoothScroll = (element, target, duration) => {
            let start = element.scrollLeft,
                change = target - start,
                startTime = performance.now(),
                val, now, elapsed, t;

            function animateScroll() {
                now = performance.now();
                elapsed = now - startTime;
                t = elapsed / duration;

                // Simple easeInOutQuad Function
                t = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                val = start + change * t;
                element.scrollLeft = val;

                if (elapsed < duration) {
                    requestAnimationFrame(animateScroll);
                }
            }
            requestAnimationFrame(animateScroll);
        };

        isScrolling = setInterval(startScroll, 2500); // Interval adjusted to the end of animation

        return () => clearInterval(isScrolling);
    }, []);

    return (
        <div ref={scrollRef} className="trending-scroller">
            {products.map((product, index) => (
                <div key={index} className=" col-12 col-md-6 col-lg-4  trending-card">
                    <div className="trending-image">
                        <img src={product.image} alt={product.name} />
                        <div className="discount-label">{product.discount}</div>
                    </div>
                    <div className="trending-info">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Trending2;
