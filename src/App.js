import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

import "./App.css";

function App() {
    const ref = useRef(null);

    const options = {
        smooth: true,
    };

    return (
        <LocomotiveScrollProvider options={options} containerRef={ref}>
            <main data-scroll-container ref={ref}>
                <section
                    className="intro"
                    data-scroll //This attribute makes this section an independent scrollable container
                    data-scroll-speed="4"
                    data-scroll-section
                >
                    <h1>This is the Introduction section</h1>
                </section>

                <section className="contents" data-scroll-section>
                    <h1
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="9"
                    >
                        I Love React
                    </h1>
                    <h1
                        data-scroll
                        data-scroll-direction="vertical"
                        data-scroll-speed="9" // Values provided here affect the animations
                    >
                        That's why I code every day
                    </h1>
                </section>

                <section id="stick" data-scroll-section>
                    <h1
                        data-scroll
                        data-scroll-speed="5"
                        data-scroll-sticky // Attibute that enables the sticky scroll
                        data-scroll-target="#stick"
                    >
                        Hey I'm Sticky
                    </h1>
                    <p>other contents</p>
                    <p>other contents</p>
                    <p>other contents</p>
                    <p>other contents</p>
                    <p>other contents</p>
                    <p>other contents</p>
                    <p>other contents</p>
                    <p>other contents</p>
                </section>

                <section className="footer" data-scroll-section>
                    <h1
                        className="op-class"
                        data-scroll
                        data-scroll-class="fadeIn"
                        data-scroll-repeat="true"
                        data-scroll-speed="2"
                    >
                        Let's end the application with this Footer
                    </h1>
                </section>
            </main>
        </LocomotiveScrollProvider>
    );
}
export default App;
