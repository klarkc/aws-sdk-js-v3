import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeOrderableClusterOptionsMessage, OrderableClusterOptionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOrderableClusterOptionsCommandInput extends DescribeOrderableClusterOptionsMessage {
}
export interface DescribeOrderableClusterOptionsCommandOutput extends OrderableClusterOptionsMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of orderable cluster options. Before you create a new cluster you
 *             can use this operation to find what options are available, such as the EC2 Availability
 *             Zones (AZ) in the specific AWS Region that you can specify, and the node types you can
 *             request. The node types differ by available storage, memory, CPU and price. With the
 *             cost involved you might want to obtain a list of cluster options in the specific region
 *             and specify values when creating a cluster.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeOrderableClusterOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeOrderableClusterOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeOrderableClusterOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableClusterOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableClusterOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOrderableClusterOptionsCommand extends $Command<DescribeOrderableClusterOptionsCommandInput, DescribeOrderableClusterOptionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeOrderableClusterOptionsCommandInput;
    constructor(input: DescribeOrderableClusterOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrderableClusterOptionsCommandInput, DescribeOrderableClusterOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
