import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { UpdateElasticsearchDomainConfigRequest, UpdateElasticsearchDomainConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateElasticsearchDomainConfigCommandInput extends UpdateElasticsearchDomainConfigRequest {
}
export interface UpdateElasticsearchDomainConfigCommandOutput extends UpdateElasticsearchDomainConfigResponse, __MetadataBearer {
}
/**
 * <p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, UpdateElasticsearchDomainConfigCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, UpdateElasticsearchDomainConfigCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new UpdateElasticsearchDomainConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateElasticsearchDomainConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateElasticsearchDomainConfigCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateElasticsearchDomainConfigCommand extends $Command<UpdateElasticsearchDomainConfigCommandInput, UpdateElasticsearchDomainConfigCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: UpdateElasticsearchDomainConfigCommandInput;
    constructor(input: UpdateElasticsearchDomainConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateElasticsearchDomainConfigCommandInput, UpdateElasticsearchDomainConfigCommandOutput>;
    private serialize;
    private deserialize;
}
