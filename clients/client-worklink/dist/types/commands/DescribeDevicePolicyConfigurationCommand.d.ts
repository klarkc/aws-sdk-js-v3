import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DescribeDevicePolicyConfigurationRequest, DescribeDevicePolicyConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDevicePolicyConfigurationCommandInput extends DescribeDevicePolicyConfigurationRequest {
}
export interface DescribeDevicePolicyConfigurationCommandOutput extends DescribeDevicePolicyConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Describes the device policy configuration for the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeDevicePolicyConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeDevicePolicyConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeDevicePolicyConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDevicePolicyConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDevicePolicyConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDevicePolicyConfigurationCommand extends $Command<DescribeDevicePolicyConfigurationCommandInput, DescribeDevicePolicyConfigurationCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DescribeDevicePolicyConfigurationCommandInput;
    constructor(input: DescribeDevicePolicyConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDevicePolicyConfigurationCommandInput, DescribeDevicePolicyConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
