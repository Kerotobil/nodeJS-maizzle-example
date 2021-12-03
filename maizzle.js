import Maizzle from "@maizzle/framework";
import express from "express";
import tailwindConfig from "./tailwind.config.js";
import { header } from "./maizzle/layouts/header.js";
import { footer } from "./maizzle/layouts/footer.js";
import confirmMail from "./maizzle/blocks/confirmation.js";
import cargoInfoMail from "./maizzle/blocks/cargoInfo.js";
import { passwordRecoveryMail } from "./maizzle/blocks/password-recovery.js";
const app = express();

/* const template = mail(
  header,
  confirmMail("kerem", "https://akilfikirmektebi.com"),
  footer
); */
const template =
  header() + confirmMail("kerem", "https://akilfikirmektebi.com") + footer();
Maizzle.render(template, {
  tailwind: {
    config: tailwindConfig,
  },
})
  .then(({ html }) =>
    app.get("/", (req, res) => {
      res.send(html);
    })
  )
  .catch((error) => console.log(error));
export default template;

app.listen(3000, () => {
  console.log("ÇALIŞTIM");
});
