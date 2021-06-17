import { InvokeEndpointCommandInput, InvokeEndpointCommandOutput } from "../commands/InvokeEndpointCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1InvokeEndpointCommand: (input: InvokeEndpointCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1InvokeEndpointCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<InvokeEndpointCommandOutput>;
