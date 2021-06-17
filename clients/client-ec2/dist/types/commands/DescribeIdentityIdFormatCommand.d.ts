import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIdentityIdFormatRequest, DescribeIdentityIdFormatResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIdentityIdFormatCommandInput extends DescribeIdentityIdFormatRequest {
}
export interface DescribeIdentityIdFormatCommandOutput extends DescribeIdentityIdFormatResult, __MetadataBearer {
}
/**
 * <p>Describes the ID format settings for resources for the specified IAM user, IAM role, or root
 *       user. For example, you can view the resource types that are enabled for longer IDs. This request only
 *       returns information about resource types whose ID formats can be modified; it does not return
 *       information about other resource types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *           <code>network-acl</code> | <code>network-acl-association</code> |
 *           <code>network-interface</code> | <code>network-interface-attachment</code> |
 *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *           <code>route-table-association</code> | <code>security-group</code> |
 *           <code>snapshot</code> | <code>subnet</code> |
 *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>These settings apply to the principal specified in the request. They do not apply to the
 *       principal that makes the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIdentityIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIdentityIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeIdentityIdFormatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIdentityIdFormatCommand extends $Command<DescribeIdentityIdFormatCommandInput, DescribeIdentityIdFormatCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeIdentityIdFormatCommandInput;
    constructor(input: DescribeIdentityIdFormatCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityIdFormatCommandInput, DescribeIdentityIdFormatCommandOutput>;
    private serialize;
    private deserialize;
}
