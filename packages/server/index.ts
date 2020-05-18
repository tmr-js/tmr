import * as http from 'http';

type SendArguments = {
  req: http.IncomingMessage;
  res: http.ServerResponse;
  component: any;
};

export function send({req, res, component} : SendArguments) {
    res.write("ok");
    res.end();
}
