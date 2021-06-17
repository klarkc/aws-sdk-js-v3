import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { GetCompatibleElasticsearchVersionsRequest, GetCompatibleElasticsearchVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCompatibleElasticsearchVersionsCommandInput extends GetCompatibleElasticsearchVersionsRequest {
}
export interface GetCompatibleElasticsearchVersionsCommandOutput extends GetCompatibleElasticsearchVersionsResponse, __MetadataBearer {
}
/**
 * <p>
 *         Returns a list of upgrade compatible Elastisearch versions.
 *         You can optionally pass a
 *         <code>
 *           <a>DomainName</a>
 *         </code>
 *         to get all upgrade compatible Elasticsearch versions for that specific domain.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetCompatibleElasticsearchVersionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetCompatibleElasticsearchVersionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new GetCompatibleElasticsearchVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCompatibleElasticsearchVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleElasticsearchVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCompatibleElasticsearchVersionsCommand extends $Command<GetCompatibleElasticsearchVersionsCommandInput, GetCompatibleElasticsearchVersionsCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: GetCompatibleElasticsearchVersionsCommandInput;
    constructor(input: GetCompatibleElasticsearchVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCompatibleElasticsearchVersionsCommandInput, GetCompatibleElasticsearchVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
