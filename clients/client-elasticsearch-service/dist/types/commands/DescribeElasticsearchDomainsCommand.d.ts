import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DescribeElasticsearchDomainsRequest, DescribeElasticsearchDomainsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeElasticsearchDomainsCommandInput extends DescribeElasticsearchDomainsRequest {
}
export interface DescribeElasticsearchDomainsCommandOutput extends DescribeElasticsearchDomainsResponse, __MetadataBearer {
}
/**
 * <p>Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchDomainsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchDomainsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchDomainsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchDomainsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeElasticsearchDomainsCommand extends $Command<DescribeElasticsearchDomainsCommandInput, DescribeElasticsearchDomainsCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DescribeElasticsearchDomainsCommandInput;
    constructor(input: DescribeElasticsearchDomainsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeElasticsearchDomainsCommandInput, DescribeElasticsearchDomainsCommandOutput>;
    private serialize;
    private deserialize;
}
