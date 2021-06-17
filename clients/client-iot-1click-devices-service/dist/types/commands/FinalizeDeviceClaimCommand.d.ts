import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { FinalizeDeviceClaimRequest, FinalizeDeviceClaimResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface FinalizeDeviceClaimCommandInput extends FinalizeDeviceClaimRequest {
}
export interface FinalizeDeviceClaimCommandOutput extends FinalizeDeviceClaimResponse, __MetadataBearer {
}
/**
 * <p>Given a device ID, finalizes the claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, FinalizeDeviceClaimCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, FinalizeDeviceClaimCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new FinalizeDeviceClaimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FinalizeDeviceClaimCommandInput} for command's `input` shape.
 * @see {@link FinalizeDeviceClaimCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class FinalizeDeviceClaimCommand extends $Command<FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: FinalizeDeviceClaimCommandInput;
    constructor(input: FinalizeDeviceClaimCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<FinalizeDeviceClaimCommandInput, FinalizeDeviceClaimCommandOutput>;
    private serialize;
    private deserialize;
}
