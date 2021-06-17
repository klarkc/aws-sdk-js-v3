import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ClusterVersionsMessage, DescribeClusterVersionsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeClusterVersionsCommandInput extends DescribeClusterVersionsMessage {
}
export interface DescribeClusterVersionsCommandOutput extends ClusterVersionsMessage, __MetadataBearer {
}
/**
 * <p>Returns descriptions of the available Amazon Redshift cluster versions. You can call this
 *             operation even before creating any clusters to learn more about the Amazon Redshift versions.
 *
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterVersionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterVersionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterVersionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeClusterVersionsCommand extends $Command<DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterVersionsCommandInput;
    constructor(input: DescribeClusterVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
