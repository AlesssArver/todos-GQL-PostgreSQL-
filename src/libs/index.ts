import bodyParser from "./body-parser";
import errors from "./errors";
import koaLogger from "./koa-logger";
import { pubSub } from "./pub-sub";

export const libs = [bodyParser, errors, koaLogger];
