import { GetMediaCommandInput, GetMediaCommandOutput } from "../commands/GetMediaCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1GetMediaCommand: (input: GetMediaCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1GetMediaCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetMediaCommandOutput>;
