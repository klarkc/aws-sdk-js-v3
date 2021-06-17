import { GetDeviceRegistrationCommandInput, GetDeviceRegistrationCommandOutput } from "../commands/GetDeviceRegistrationCommand";
import { SendHeartbeatCommandInput, SendHeartbeatCommandOutput } from "../commands/SendHeartbeatCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1GetDeviceRegistrationCommand: (input: GetDeviceRegistrationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SendHeartbeatCommand: (input: SendHeartbeatCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1GetDeviceRegistrationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetDeviceRegistrationCommandOutput>;
export declare const deserializeAws_restJson1SendHeartbeatCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SendHeartbeatCommandOutput>;
