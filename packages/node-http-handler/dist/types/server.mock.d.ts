/// <reference types="node" />
import { HttpResponse } from "@aws-sdk/types";
import { IncomingMessage, Server as HttpServer, ServerResponse } from "http";
import { Http2Server } from "http2";
import { Server as HttpsServer } from "https";
export declare function createResponseFunction(httpResp: HttpResponse): (request: IncomingMessage, response: ServerResponse) => void;
export declare function createContinueResponseFunction(httpResp: HttpResponse): (request: IncomingMessage, response: ServerResponse) => void;
export declare function createMockHttpsServer(): HttpsServer;
export declare function createMockHttpServer(): HttpServer;
export declare function createMockHttp2Server(): Http2Server;
