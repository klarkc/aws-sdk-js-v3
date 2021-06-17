import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetVPCEConfigurationRequest, GetVPCEConfigurationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetVPCEConfigurationCommandInput extends GetVPCEConfigurationRequest {
}
export interface GetVPCEConfigurationCommandOutput extends GetVPCEConfigurationResult, __MetadataBearer {
}
/**
 * <p>Returns information about the configuration settings for your Amazon Virtual Private
 *             Cloud (VPC) endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new GetVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetVPCEConfigurationCommand extends $Command<GetVPCEConfigurationCommandInput, GetVPCEConfigurationCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetVPCEConfigurationCommandInput;
    constructor(input: GetVPCEConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetVPCEConfigurationCommandInput, GetVPCEConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
