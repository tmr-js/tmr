import * as http from 'http';
import {renderToString} from "react-dom/server";

type SendArguments = {
  req: http.IncomingMessage;
  res: http.ServerResponse;
  component: any;
};

export function send({req, res, component} : SendArguments) {
    res.write(renderToString(component));
    res.end();
}
