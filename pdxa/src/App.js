import ProfileCard from "./ProfileCard";

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Digital Assistance</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" subTitle="@alexa" description="alexa is the best version" imageURL="./images/alexa.png" />
                        </div>

                        <div className="column is-4">
                            <ProfileCard title="Cortona" subTitle="@cortona" description="Cortona is Microsoft Version" imageURL="./images/cortana.png" />
                        </div>


                        <div className="column is-4">
                            <ProfileCard title="Siri" subTitle="@siri" description="Siri is the Apple Version" imageURL="./images/siri.png" />
                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
}

export default App