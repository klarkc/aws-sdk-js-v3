import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DescribeElasticsearchDomainConfigRequest, DescribeElasticsearchDomainConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeElasticsearchDomainConfigCommandInput extends DescribeElasticsearchDomainConfigRequest {
}
export interface DescribeElasticsearchDomainConfigCommandOutput extends DescribeElasticsearchDomainConfigResponse, __MetadataBearer {
}
/**
 * <p>Provides cluster configuration information about the specified Elasticsearch domain, such as the state, creation date, update version, and update date for cluster options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchDomainConfigCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchDomainConfigCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchDomainConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchDomainConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchDomainConfigCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeElasticsearchDomainConfigCommand extends $Command<DescribeElasticsearchDomainConfigCommandInput, DescribeElasticsearchDomainConfigCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DescribeElasticsearchDomainConfigCommandInput;
    constructor(input: DescribeElasticsearchDomainConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeElasticsearchDomainConfigCommandInput, DescribeElasticsearchDomainConfigCommandOutput>;
    private serialize;
    private deserialize;
}
