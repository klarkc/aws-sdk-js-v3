import { BuildMiddleware, RelativeMiddlewareOptions, RequestHandler } from "@aws-sdk/types";
/**
 * Middleware that generates WebSocket URL to TranscribeStreaming service
 * Reference: https://docs.aws.amazon.com/transcribe/latest/dg/websocket.html
 */
export declare const websocketURLMiddleware: (options: {
    requestHandler: RequestHandler<any, any>;
}) => BuildMiddleware<any, any>;
export declare const websocketURLMiddlewareOptions: RelativeMiddlewareOptions;
