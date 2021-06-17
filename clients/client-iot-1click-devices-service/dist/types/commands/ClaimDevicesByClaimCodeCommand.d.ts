import { IoT1ClickDevicesServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickDevicesServiceClient";
import { ClaimDevicesByClaimCodeRequest, ClaimDevicesByClaimCodeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ClaimDevicesByClaimCodeCommandInput extends ClaimDevicesByClaimCodeRequest {
}
export interface ClaimDevicesByClaimCodeCommandOutput extends ClaimDevicesByClaimCodeResponse, __MetadataBearer {
}
/**
 * <p>Adds device(s) to your account (i.e., claim one or more devices) if and only if you
 *  received a claim code with the device(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, ClaimDevicesByClaimCodeCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, ClaimDevicesByClaimCodeCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new ClaimDevicesByClaimCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClaimDevicesByClaimCodeCommandInput} for command's `input` shape.
 * @see {@link ClaimDevicesByClaimCodeCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ClaimDevicesByClaimCodeCommand extends $Command<ClaimDevicesByClaimCodeCommandInput, ClaimDevicesByClaimCodeCommandOutput, IoT1ClickDevicesServiceClientResolvedConfig> {
    readonly input: ClaimDevicesByClaimCodeCommandInput;
    constructor(input: ClaimDevicesByClaimCodeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickDevicesServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ClaimDevicesByClaimCodeCommandInput, ClaimDevicesByClaimCodeCommandOutput>;
    private serialize;
    private deserialize;
}
