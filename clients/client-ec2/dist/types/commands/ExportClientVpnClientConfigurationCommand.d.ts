import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportClientVpnClientConfigurationRequest, ExportClientVpnClientConfigurationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportClientVpnClientConfigurationCommandInput extends ExportClientVpnClientConfigurationRequest {
}
export interface ExportClientVpnClientConfigurationCommandOutput extends ExportClientVpnClientConfigurationResult, __MetadataBearer {
}
/**
 * <p>Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration
 * 			file includes the Client VPN endpoint and certificate information clients need to establish a connection
 * 			with the Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportClientVpnClientConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportClientVpnClientConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportClientVpnClientConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportClientVpnClientConfigurationCommandInput} for command's `input` shape.
 * @see {@link ExportClientVpnClientConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportClientVpnClientConfigurationCommand extends $Command<ExportClientVpnClientConfigurationCommandInput, ExportClientVpnClientConfigurationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ExportClientVpnClientConfigurationCommandInput;
    constructor(input: ExportClientVpnClientConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportClientVpnClientConfigurationCommandInput, ExportClientVpnClientConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
