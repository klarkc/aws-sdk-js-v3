import { Pluggable } from "@aws-sdk/types";
import { WebSocketResolvedConfig } from "./configuration";
export declare const getWebSocketPlugin: (config: WebSocketResolvedConfig) => Pluggable<any, any>;
