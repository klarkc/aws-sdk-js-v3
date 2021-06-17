import { Provider, RequestHandler, RequestSigner } from "@aws-sdk/types";
export interface WebSocketInputConfig {
}
interface PreviouslyResolved {
    signer: Provider<RequestSigner>;
    requestHandler: RequestHandler<any, any>;
}
export interface WebSocketResolvedConfig {
    /**
     * Resolved value of input config {@link AwsAuthInputConfig.signer}
     */
    signer: Provider<RequestSigner>;
    /**
     * The HTTP handler to use. Fetch in browser and Https in Nodejs.
     */
    requestHandler: RequestHandler<any, any>;
}
export declare const resolveWebSocketConfig: <T>(input: T & WebSocketInputConfig & PreviouslyResolved) => T & WebSocketResolvedConfig;
export {};
