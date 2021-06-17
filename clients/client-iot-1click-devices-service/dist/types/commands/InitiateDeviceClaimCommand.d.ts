import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { InitiateDeviceClaimRequest, InitiateDeviceClaimResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface InitiateDeviceClaimCommandInput extends InitiateDeviceClaimRequest {
}
export interface InitiateDeviceClaimCommandOutput extends InitiateDeviceClaimResponse, __MetadataBearer {
}
/**
 * <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InitiateDeviceClaimCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, InitiateDeviceClaimCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new InitiateDeviceClaimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateDeviceClaimCommandInput} for command's `input` shape.
 * @see {@link InitiateDeviceClaimCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class InitiateDeviceClaimCommand extends $Command<InitiateDeviceClaimCommandInput, InitiateDeviceClaimCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: InitiateDeviceClaimCommandInput;
    constructor(input: InitiateDeviceClaimCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InitiateDeviceClaimCommandInput, InitiateDeviceClaimCommandOutput>;
    private serialize;
    private deserialize;
}
