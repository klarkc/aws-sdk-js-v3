import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { ListElasticsearchInstanceTypesRequest, ListElasticsearchInstanceTypesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListElasticsearchInstanceTypesCommandInput extends ListElasticsearchInstanceTypesRequest {
}
export interface ListElasticsearchInstanceTypesCommandOutput extends ListElasticsearchInstanceTypesResponse, __MetadataBearer {
}
/**
 * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListElasticsearchInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListElasticsearchInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link ListElasticsearchInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListElasticsearchInstanceTypesCommand extends $Command<ListElasticsearchInstanceTypesCommandInput, ListElasticsearchInstanceTypesCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: ListElasticsearchInstanceTypesCommandInput;
    constructor(input: ListElasticsearchInstanceTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListElasticsearchInstanceTypesCommandInput, ListElasticsearchInstanceTypesCommandOutput>;
    private serialize;
    private deserialize;
}
