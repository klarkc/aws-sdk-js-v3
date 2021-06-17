import { ElasticsearchServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticsearchServiceClient";
import { DescribePackagesRequest, DescribePackagesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePackagesCommandInput extends DescribePackagesRequest {
}
export interface DescribePackagesCommandOutput extends DescribePackagesResponse, __MetadataBearer {
}
/**
 * <p>Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribePackagesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribePackagesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribePackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePackagesCommandInput} for command's `input` shape.
 * @see {@link DescribePackagesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePackagesCommand extends $Command<DescribePackagesCommandInput, DescribePackagesCommandOutput, ElasticsearchServiceClientResolvedConfig> {
    readonly input: DescribePackagesCommandInput;
    constructor(input: DescribePackagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticsearchServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePackagesCommandInput, DescribePackagesCommandOutput>;
    private serialize;
    private deserialize;
}
