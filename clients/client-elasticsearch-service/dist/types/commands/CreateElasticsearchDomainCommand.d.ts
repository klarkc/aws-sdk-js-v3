import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { CreateElasticsearchDomainRequest, CreateElasticsearchDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateElasticsearchDomainCommandInput extends CreateElasticsearchDomainRequest {
}
export interface CreateElasticsearchDomainCommandOutput extends CreateElasticsearchDomainResponse, __MetadataBearer {
}
/**
 * <p>Creates a new Elasticsearch domain. For more information,
 *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CreateElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CreateElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new CreateElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link CreateElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateElasticsearchDomainCommand extends $Command<CreateElasticsearchDomainCommandInput, CreateElasticsearchDomainCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: CreateElasticsearchDomainCommandInput;
    constructor(input: CreateElasticsearchDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateElasticsearchDomainCommandInput, CreateElasticsearchDomainCommandOutput>;
    private serialize;
    private deserialize;
}
