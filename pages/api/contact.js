import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const contact = (req, res) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smpt.gmail.com",
        secure: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    const mailInfo = {
        to: process.env.USER,
        from: req.body.from,
        subject: "Portfolio feedback",
        text: req.body.mail,

    };

    transport.sendMail(mailInfo, (err, info) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(info.response);
        }
    });
};

module.exports = contact;
