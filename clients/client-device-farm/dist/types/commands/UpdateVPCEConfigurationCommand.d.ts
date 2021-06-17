import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateVPCEConfigurationRequest, UpdateVPCEConfigurationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVPCEConfigurationCommandInput extends UpdateVPCEConfigurationRequest {
}
export interface UpdateVPCEConfigurationCommandOutput extends UpdateVPCEConfigurationResult, __MetadataBearer {
}
/**
 * <p>Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVPCEConfigurationCommand extends $Command<UpdateVPCEConfigurationCommandInput, UpdateVPCEConfigurationCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateVPCEConfigurationCommandInput;
    constructor(input: UpdateVPCEConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVPCEConfigurationCommandInput, UpdateVPCEConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
