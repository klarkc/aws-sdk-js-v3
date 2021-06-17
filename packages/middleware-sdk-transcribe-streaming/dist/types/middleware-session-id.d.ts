import { InitializeHandlerOptions, InitializeMiddleware, RequestHandler } from "@aws-sdk/types";
/**
 * Middleware that inject default sessionId for operations, and inject
 * the parameters from request to the response metadata. This is
 * necessary because the SDK cannot access any parameters other than
 * the result stream. So it copies the parameters from input to the same
 * parameters in the output.
 */
export declare const injectSessionIdMiddleware: (config: {
    requestHandler: RequestHandler<any, any>;
}) => InitializeMiddleware<any, any>;
export declare const injectSessionIdMiddlewareOptions: InitializeHandlerOptions;
