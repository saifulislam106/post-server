// functions/index.ts
import * as functions from "firebase-functions";
import  express from "express";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "../dist/app.module"; 
import { ExpressAdapter } from "@nestjs/platform-express";

const server = express();

async function bootstrap(expressInstance) {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  await app.init();
}

bootstrap(server);

export const api = functions.https.onRequest(server);
