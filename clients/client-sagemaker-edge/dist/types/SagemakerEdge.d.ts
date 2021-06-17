import { SagemakerEdgeClient } from "./SagemakerEdgeClient";
import { GetDeviceRegistrationCommandInput, GetDeviceRegistrationCommandOutput } from "./commands/GetDeviceRegistrationCommand";
import { SendHeartbeatCommandInput, SendHeartbeatCommandOutput } from "./commands/SendHeartbeatCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>SageMaker Edge Manager dataplane service for communicating with active agents.</p>
 */
export declare class SagemakerEdge extends SagemakerEdgeClient {
    /**
     * <p>Use to check if a device is registered with SageMaker Edge Manager.</p>
     */
    getDeviceRegistration(args: GetDeviceRegistrationCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceRegistrationCommandOutput>;
    getDeviceRegistration(args: GetDeviceRegistrationCommandInput, cb: (err: any, data?: GetDeviceRegistrationCommandOutput) => void): void;
    getDeviceRegistration(args: GetDeviceRegistrationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceRegistrationCommandOutput) => void): void;
    /**
     * <p>Use to get the current status of devices registered on SageMaker Edge Manager.</p>
     */
    sendHeartbeat(args: SendHeartbeatCommandInput, options?: __HttpHandlerOptions): Promise<SendHeartbeatCommandOutput>;
    sendHeartbeat(args: SendHeartbeatCommandInput, cb: (err: any, data?: SendHeartbeatCommandOutput) => void): void;
    sendHeartbeat(args: SendHeartbeatCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendHeartbeatCommandOutput) => void): void;
}
