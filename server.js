const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Node.js CI/CD Demo</title>
                <style>
                    body {
                        font-family: Arial;
                        text-align: center;
                        margin-top: 100px;
                    }

                    h1 {
                        color: #232f3e;
                    }

                    .box {
                        display: inline-block;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 0 15px #ccc;
                    }
                </style>
            </head>

            <body>
                <div class="box">
                    <h1>Node.js CI/CD Pipeline</h1>
                    <p>Application deployed successfully!</p>
                    <p>GitHub → CodePipeline → CodeBuild → EC2</p>
                    <p>Version: 1.0</p>
                </div>
            </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
