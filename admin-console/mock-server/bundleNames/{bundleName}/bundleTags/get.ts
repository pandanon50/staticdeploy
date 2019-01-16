import { RequestHandler } from "express";
import faker from "faker";
import { range } from "lodash";

const bundleNames = range(30).map(() => faker.lorem.word());

export default ((_req, res) => {
    if (Math.random() > 0.9) {
        res.status(400).send({ message: "Random error" });
    } else {
        res.status(200).send(bundleNames);
    }
}) as RequestHandler;