import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { RequestHandlerMetadata } from "@aws-sdk/types";
export interface WebSocketHandlerOptions {
    /**
     * The maximum time in milliseconds that the connection phase of a request
     * may take before the connection attempt is abandoned.
     */
    connectionTimeout?: number;
}
/**
 * Base handler for websocket requests. By default, the request input and output
 * body will be in a ReadableStream, because of interface consistency among middleware.
 * If ReadableStream is not available, like in React-Native, the response body
 * will be an async iterable.
 */
export declare class WebSocketHandler implements HttpHandler {
    readonly metadata: RequestHandlerMetadata;
    private readonly connectionTimeout;
    constructor({ connectionTimeout }?: WebSocketHandlerOptions);
    destroy(): void;
    handle(request: HttpRequest): Promise<{
        response: HttpResponse;
    }>;
}
