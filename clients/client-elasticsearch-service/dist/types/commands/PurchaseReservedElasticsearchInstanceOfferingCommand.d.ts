import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { PurchaseReservedElasticsearchInstanceOfferingRequest, PurchaseReservedElasticsearchInstanceOfferingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseReservedElasticsearchInstanceOfferingCommandInput extends PurchaseReservedElasticsearchInstanceOfferingRequest {
}
export interface PurchaseReservedElasticsearchInstanceOfferingCommandOutput extends PurchaseReservedElasticsearchInstanceOfferingResponse, __MetadataBearer {
}
/**
 * <p>Allows you to purchase reserved Elasticsearch instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new PurchaseReservedElasticsearchInstanceOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseReservedElasticsearchInstanceOfferingCommand extends $Command<PurchaseReservedElasticsearchInstanceOfferingCommandInput, PurchaseReservedElasticsearchInstanceOfferingCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: PurchaseReservedElasticsearchInstanceOfferingCommandInput;
    constructor(input: PurchaseReservedElasticsearchInstanceOfferingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseReservedElasticsearchInstanceOfferingCommandInput, PurchaseReservedElasticsearchInstanceOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
