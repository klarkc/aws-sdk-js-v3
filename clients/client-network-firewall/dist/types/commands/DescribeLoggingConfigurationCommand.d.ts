import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeLoggingConfigurationRequest, DescribeLoggingConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLoggingConfigurationCommandInput extends DescribeLoggingConfigurationRequest {
}
export interface DescribeLoggingConfigurationCommandOutput extends DescribeLoggingConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Returns the logging configuration for the specified firewall. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const command = new DescribeLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLoggingConfigurationCommand extends $Command<DescribeLoggingConfigurationCommandInput, DescribeLoggingConfigurationCommandOutput, NetworkFirewallClientResolvedConfig> {
    readonly input: DescribeLoggingConfigurationCommandInput;
    constructor(input: DescribeLoggingConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NetworkFirewallClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoggingConfigurationCommandInput, DescribeLoggingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
