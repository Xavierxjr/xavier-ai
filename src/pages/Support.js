import React from 'react'
import emailjs from 'emailjs-com'
import homeImage from "./images/home.jpg"

const Support = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_jtmanyb",
            "template_1wnu1qk",
            e.target,
            "user_OqLg8d4LXdsGXYIXD0dZ8"
        ).then(res => {
            console.log(res);
            alert("Email sent! Please wait for the reply!");
        }).catch(err => console.log(err));

    }

    return (
        <div className="support">
            <section style={{
                position: "fixed",
                padding: "0",
                margin: "0",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${homeImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover",
                display: "block",
                verticalAlign: "middle",
                zIndex: "-1",
            }}>
                <div className="container"
                    style={{
                        width: "80%",
                        fontSize: "25px",
                        fontWeight: "bold",
                        marginTop: "130px",
                    }}>
                    <h1 style={{
                        marginTop: "25px",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "55px",
                        fontFamily: "cursive",
                        fontStyle: "initial",
                    }}>Contact the team for help!</h1>
                    <form
                        className="row"
                        style={{ margin: "25px 85px 75px 100px" }}
                        onSubmit={sendEmail}
                    >
                        <label>name</label>
                        <input type="text" name="name" className="form-control" required />
                        <label>Email</label>
                        <input
                            type="email"
                            name="user_email"
                            className="form-control"
                            value="xavierxjr334@gmail.com"
                            required
                        />
                        <label>Message</label>
                        <textarea name="message" rows="4" className="form-control" required />
                        <input
                            type="submit"
                            value="send"
                            className="form-control btn btn-primary"
                            style={{ margin: "30px" }}
                        />
                    </form>
                </div>
            </section>
            <footer style={{
                clear: "both",
                height: "85px",
                width: "100%",
                paddingTop: "30px",
                backgroundColor: "#333333",
                color: "#ffffff",
                textAlign: "center",
                position: "fixed",
                bottom: "0",
            }}>
                <p>© 2021 Xavier.ai. Unitec Capstone Project</p>
            </footer>
        </div>
    )
}

export default Support
