import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DescribeOutboundCrossClusterSearchConnectionsRequest, DescribeOutboundCrossClusterSearchConnectionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOutboundCrossClusterSearchConnectionsCommandInput extends DescribeOutboundCrossClusterSearchConnectionsRequest {
}
export interface DescribeOutboundCrossClusterSearchConnectionsCommandOutput extends DescribeOutboundCrossClusterSearchConnectionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the outbound cross-cluster search connections for a source domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeOutboundCrossClusterSearchConnectionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeOutboundCrossClusterSearchConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOutboundCrossClusterSearchConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOutboundCrossClusterSearchConnectionsCommand extends $Command<DescribeOutboundCrossClusterSearchConnectionsCommandInput, DescribeOutboundCrossClusterSearchConnectionsCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DescribeOutboundCrossClusterSearchConnectionsCommandInput;
    constructor(input: DescribeOutboundCrossClusterSearchConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOutboundCrossClusterSearchConnectionsCommandInput, DescribeOutboundCrossClusterSearchConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
