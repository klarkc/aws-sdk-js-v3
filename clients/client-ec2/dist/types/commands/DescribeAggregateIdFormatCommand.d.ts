import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAggregateIdFormatRequest, DescribeAggregateIdFormatResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAggregateIdFormatCommandInput extends DescribeAggregateIdFormatRequest {
}
export interface DescribeAggregateIdFormatCommandOutput extends DescribeAggregateIdFormatResult, __MetadataBearer {
}
/**
 * <p>Describes the longer ID format settings for all resource types in a specific
 *          Region. This request is useful for performing a quick audit to determine whether a
 *          specific Region is fully opted in for longer IDs (17-character IDs).</p>
 *
 *          <p>This request only returns information about resource types that support longer IDs.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *         <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *         <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *         <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *         <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *         <code>network-acl</code> | <code>network-acl-association</code> |
 *         <code>network-interface</code> | <code>network-interface-attachment</code> |
 *         <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *         <code>route-table-association</code> | <code>security-group</code> |
 *         <code>snapshot</code> | <code>subnet</code> |
 *         <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> |
 *         <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *         <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAggregateIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAggregateIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAggregateIdFormatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAggregateIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAggregateIdFormatCommand extends $Command<DescribeAggregateIdFormatCommandInput, DescribeAggregateIdFormatCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeAggregateIdFormatCommandInput;
    constructor(input: DescribeAggregateIdFormatCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAggregateIdFormatCommandInput, DescribeAggregateIdFormatCommandOutput>;
    private serialize;
    private deserialize;
}
