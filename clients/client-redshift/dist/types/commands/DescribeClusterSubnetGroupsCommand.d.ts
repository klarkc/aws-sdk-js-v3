import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterSubnetGroupMessage, DescribeClusterSubnetGroupsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClusterSubnetGroupsCommandInput extends DescribeClusterSubnetGroupsMessage {
}
export interface DescribeClusterSubnetGroupsCommandOutput extends ClusterSubnetGroupMessage, __MetadataBearer {
}
/**
 * <p>Returns one or more cluster subnet group objects, which contain metadata about your
 *             cluster subnet groups. By default, this operation returns information about all cluster
 *             subnet groups that are defined in you AWS account.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all subnet groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all subnet groups that have
 *             any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, subnet groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterSubnetGroupsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterSubnetGroupsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterSubnetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterSubnetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSubnetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClusterSubnetGroupsCommand extends $Command<DescribeClusterSubnetGroupsCommandInput, DescribeClusterSubnetGroupsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterSubnetGroupsCommandInput;
    constructor(input: DescribeClusterSubnetGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterSubnetGroupsCommandInput, DescribeClusterSubnetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
