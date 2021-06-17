import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DescribeAuditStreamConfigurationRequest, DescribeAuditStreamConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAuditStreamConfigurationCommandInput extends DescribeAuditStreamConfigurationRequest {
}
export interface DescribeAuditStreamConfigurationCommandOutput extends DescribeAuditStreamConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Describes the configuration for delivering audit streams to the customer account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeAuditStreamConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeAuditStreamConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeAuditStreamConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditStreamConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditStreamConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAuditStreamConfigurationCommand extends $Command<DescribeAuditStreamConfigurationCommandInput, DescribeAuditStreamConfigurationCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DescribeAuditStreamConfigurationCommandInput;
    constructor(input: DescribeAuditStreamConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAuditStreamConfigurationCommandInput, DescribeAuditStreamConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
