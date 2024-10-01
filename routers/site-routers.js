import { Router } from "express";
const siteRouters = Router();
siteRouters.get("/", (req, res) => {
    res.render("home", {title: "Моё любимое дело — это прогулки на свежем воздухе. Я обожаю гулять, будь то в парке, по городу или на природе Это идеальный способ отвлечься от суеты и провести время наедине с собой или с близкими."})
});
siteRouters.get ("/reasons", (req, res) => {
    res.render("contacts", { reasons: ["Расслабляется тело", "Очищается разум", "Мир вокруг становится ярче и спокойнее"] })
});
siteRouters.get ("/opinion", (req, res) => {
    res.render("opinion", {title: "Это идеальный способ отвлечься от суеты и провести время наедине с собой или с близкими."})
});
export default siteRouters