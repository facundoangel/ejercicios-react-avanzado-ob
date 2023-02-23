const express = require("express");
const cors = require("cors");
const webpush = require("web-push");

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Constantes

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cT9D92HTNPA:APA91bHjLYCx4K1YN0nXiz_xcI708eqjApp-9Y9FWimWlQIz3MHzrByC1bGWTrBWN4BvxifJ6b8KjO9X7fB4eb3wAJ2fgwQc6iCxhB-pZElxMXrjqR2tFGGbfCg5gXJhSR5ndjq_pyaa",
  expirationTime: null,
  keys: {
    p256dh:
      "BFX50VVz2vsd-e81uoGdGGYi9_otZRdeHmVLIgVr2QgqPfM5qndYPEQKGSp-TMjdjHkDfSg_xcQ2Ggxi2WhWJMs",
    auth: "tuVwjKqvn-ED0LJphMWmsw",
  },
};

const vapidKeys = {
  publicKey:
    "BIOMUMWYjiaIcyitnFEFSgHB5d6nwWjzLjSD6Fqxzz1swr6aaoNB8iUWWLEiP4Djvoq3KVd6i5JtItKIX8gghhc",
  privateKey: "rpPc4IMXGK9Nxg-0fma38Oj9Qn9RlLoMcApBmMwiwWA",
};
webpush.setVapidDetails(
  "mailto:facundo@mail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Routes
app.get("/", async (req, res) => {
  const payload = JSON.stringify({
    title: "Título de Notificación",
    message: "Mensaje de la notificación",
  });
  try {
    await webpush.sendNotification(pushSubscription, payload);
    await res.send("Enviado");
  } catch (e) {
    console.log(e);
  }
});

app.post("/notification", async (req, res) => {
  try {
    await webpush.sendNotification(pushSubscription, JSON.stringify(req.body));
    await res.send("Enviado");
  } catch (e) {
    console.log(e);
  }
});

app.post("/subscribe", (req, res) => {
  console.log(req.body);
  res.sendStatus(200).json();
});

app.listen(8000, () => console.log("Server listening on port 8000"));
