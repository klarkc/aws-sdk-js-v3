import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DescribeReservedElasticsearchInstanceOfferingsRequest, DescribeReservedElasticsearchInstanceOfferingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReservedElasticsearchInstanceOfferingsCommandInput extends DescribeReservedElasticsearchInstanceOfferingsRequest {
}
export interface DescribeReservedElasticsearchInstanceOfferingsCommandOutput extends DescribeReservedElasticsearchInstanceOfferingsResponse, __MetadataBearer {
}
/**
 * <p>Lists available reserved Elasticsearch instance offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeReservedElasticsearchInstanceOfferingsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeReservedElasticsearchInstanceOfferingsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeReservedElasticsearchInstanceOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReservedElasticsearchInstanceOfferingsCommand extends $Command<DescribeReservedElasticsearchInstanceOfferingsCommandInput, DescribeReservedElasticsearchInstanceOfferingsCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DescribeReservedElasticsearchInstanceOfferingsCommandInput;
    constructor(input: DescribeReservedElasticsearchInstanceOfferingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedElasticsearchInstanceOfferingsCommandInput, DescribeReservedElasticsearchInstanceOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
