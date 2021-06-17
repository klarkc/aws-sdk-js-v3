import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DescribeCompanyNetworkConfigurationRequest, DescribeCompanyNetworkConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCompanyNetworkConfigurationCommandInput extends DescribeCompanyNetworkConfigurationRequest {
}
export interface DescribeCompanyNetworkConfigurationCommandOutput extends DescribeCompanyNetworkConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Describes the networking configuration to access the internal websites associated with
 *             the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeCompanyNetworkConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeCompanyNetworkConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeCompanyNetworkConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCompanyNetworkConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeCompanyNetworkConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCompanyNetworkConfigurationCommand extends $Command<DescribeCompanyNetworkConfigurationCommandInput, DescribeCompanyNetworkConfigurationCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DescribeCompanyNetworkConfigurationCommandInput;
    constructor(input: DescribeCompanyNetworkConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCompanyNetworkConfigurationCommandInput, DescribeCompanyNetworkConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
