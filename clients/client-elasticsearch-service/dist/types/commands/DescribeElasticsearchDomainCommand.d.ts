import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DescribeElasticsearchDomainRequest, DescribeElasticsearchDomainResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeElasticsearchDomainCommandInput extends DescribeElasticsearchDomainRequest {
}
export interface DescribeElasticsearchDomainCommandOutput extends DescribeElasticsearchDomainResponse, __MetadataBearer {
}
/**
 * <p>Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribeElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeElasticsearchDomainCommand extends $Command<DescribeElasticsearchDomainCommandInput, DescribeElasticsearchDomainCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DescribeElasticsearchDomainCommandInput;
    constructor(input: DescribeElasticsearchDomainCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeElasticsearchDomainCommandInput, DescribeElasticsearchDomainCommandOutput>;
    private serialize;
    private deserialize;
}
