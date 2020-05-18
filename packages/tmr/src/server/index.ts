import * as http from "http";
// import { renderToString } from "react-dom/server";
import render from "./render";

type SendArguments = {
  req: http.IncomingMessage;
  res: http.ServerResponse;
  component: any;
};

export function send({ req, res, component }: SendArguments) {
  console.log("component", component);
  res.write(render({ scripts: ["/.tmr/init.js"] }));
  res.end();
}
