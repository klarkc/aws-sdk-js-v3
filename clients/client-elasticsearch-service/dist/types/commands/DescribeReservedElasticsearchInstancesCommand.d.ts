import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DescribeReservedElasticsearchInstancesRequest, DescribeReservedElasticsearchInstancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReservedElasticsearchInstancesCommandInput extends DescribeReservedElasticsearchInstancesRequest {
}
export interface DescribeReservedElasticsearchInstancesCommandOutput extends DescribeReservedElasticsearchInstancesResponse, __MetadataBearer {
}
/**
 * <p>Returns information about reserved Elasticsearch instances for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeReservedElasticsearchInstancesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeReservedElasticsearchInstancesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeReservedElasticsearchInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedElasticsearchInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedElasticsearchInstancesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReservedElasticsearchInstancesCommand extends $Command<DescribeReservedElasticsearchInstancesCommandInput, DescribeReservedElasticsearchInstancesCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DescribeReservedElasticsearchInstancesCommandInput;
    constructor(input: DescribeReservedElasticsearchInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedElasticsearchInstancesCommandInput, DescribeReservedElasticsearchInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
