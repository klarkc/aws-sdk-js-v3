import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DeleteElasticsearchDomainRequest, DeleteElasticsearchDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteElasticsearchDomainCommandInput extends DeleteElasticsearchDomainRequest {
}
export interface DeleteElasticsearchDomainCommandOutput extends DeleteElasticsearchDomainResponse, __MetadataBearer {
}
/**
 * <p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteElasticsearchDomainCommand extends $Command<DeleteElasticsearchDomainCommandInput, DeleteElasticsearchDomainCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DeleteElasticsearchDomainCommandInput;
    constructor(input: DeleteElasticsearchDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteElasticsearchDomainCommandInput, DeleteElasticsearchDomainCommandOutput>;
    private serialize;
    private deserialize;
}
