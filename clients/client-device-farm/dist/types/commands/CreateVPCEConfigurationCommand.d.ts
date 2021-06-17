import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateVPCEConfigurationRequest, CreateVPCEConfigurationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVPCEConfigurationCommandInput extends CreateVPCEConfigurationRequest {
}
export interface CreateVPCEConfigurationCommandOutput extends CreateVPCEConfigurationResult, __MetadataBearer {
}
/**
 * <p>Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud
 *             (VPC) endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new CreateVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVPCEConfigurationCommand extends $Command<CreateVPCEConfigurationCommandInput, CreateVPCEConfigurationCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateVPCEConfigurationCommandInput;
    constructor(input: CreateVPCEConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVPCEConfigurationCommandInput, CreateVPCEConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
