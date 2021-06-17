import { SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput } from "../commands/SendSSHPublicKeyCommand";
import { SendSerialConsoleSSHPublicKeyCommandInput, SendSerialConsoleSSHPublicKeyCommandOutput } from "../commands/SendSerialConsoleSSHPublicKeyCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand: (input: SendSerialConsoleSSHPublicKeyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1SendSSHPublicKeyCommand: (input: SendSSHPublicKeyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SendSerialConsoleSSHPublicKeyCommandOutput>;
export declare const deserializeAws_json1_1SendSSHPublicKeyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SendSSHPublicKeyCommandOutput>;
