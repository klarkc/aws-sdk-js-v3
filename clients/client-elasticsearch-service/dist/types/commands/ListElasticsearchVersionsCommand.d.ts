import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { ListElasticsearchVersionsRequest, ListElasticsearchVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListElasticsearchVersionsCommandInput extends ListElasticsearchVersionsRequest {
}
export interface ListElasticsearchVersionsCommandOutput extends ListElasticsearchVersionsResponse, __MetadataBearer {
}
/**
 * <p>List all supported Elasticsearch versions</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListElasticsearchVersionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListElasticsearchVersionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListElasticsearchVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListElasticsearchVersionsCommandInput} for command's `input` shape.
 * @see {@link ListElasticsearchVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListElasticsearchVersionsCommand extends $Command<ListElasticsearchVersionsCommandInput, ListElasticsearchVersionsCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: ListElasticsearchVersionsCommandInput;
    constructor(input: ListElasticsearchVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListElasticsearchVersionsCommandInput, ListElasticsearchVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
