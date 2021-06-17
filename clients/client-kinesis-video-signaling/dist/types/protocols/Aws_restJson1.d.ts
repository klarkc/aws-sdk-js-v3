import { GetIceServerConfigCommandInput, GetIceServerConfigCommandOutput } from "../commands/GetIceServerConfigCommand";
import { SendAlexaOfferToMasterCommandInput, SendAlexaOfferToMasterCommandOutput } from "../commands/SendAlexaOfferToMasterCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1GetIceServerConfigCommand: (input: GetIceServerConfigCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SendAlexaOfferToMasterCommand: (input: SendAlexaOfferToMasterCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1GetIceServerConfigCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetIceServerConfigCommandOutput>;
export declare const deserializeAws_restJson1SendAlexaOfferToMasterCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SendAlexaOfferToMasterCommandOutput>;
