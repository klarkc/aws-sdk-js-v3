import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DescribeInboundCrossClusterSearchConnectionsRequest, DescribeInboundCrossClusterSearchConnectionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInboundCrossClusterSearchConnectionsCommandInput extends DescribeInboundCrossClusterSearchConnectionsRequest {
}
export interface DescribeInboundCrossClusterSearchConnectionsCommandOutput extends DescribeInboundCrossClusterSearchConnectionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the inbound cross-cluster search connections for a destination domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeInboundCrossClusterSearchConnectionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeInboundCrossClusterSearchConnectionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeInboundCrossClusterSearchConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInboundCrossClusterSearchConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInboundCrossClusterSearchConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInboundCrossClusterSearchConnectionsCommand extends $Command<DescribeInboundCrossClusterSearchConnectionsCommandInput, DescribeInboundCrossClusterSearchConnectionsCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DescribeInboundCrossClusterSearchConnectionsCommandInput;
    constructor(input: DescribeInboundCrossClusterSearchConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInboundCrossClusterSearchConnectionsCommandInput, DescribeInboundCrossClusterSearchConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
