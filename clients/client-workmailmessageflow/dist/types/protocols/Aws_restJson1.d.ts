import { GetRawMessageContentCommandInput, GetRawMessageContentCommandOutput } from "../commands/GetRawMessageContentCommand";
import { PutRawMessageContentCommandInput, PutRawMessageContentCommandOutput } from "../commands/PutRawMessageContentCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1GetRawMessageContentCommand: (input: GetRawMessageContentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutRawMessageContentCommand: (input: PutRawMessageContentCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1GetRawMessageContentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetRawMessageContentCommandOutput>;
export declare const deserializeAws_restJson1PutRawMessageContentCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutRawMessageContentCommandOutput>;
