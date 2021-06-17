import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeDataSourcesInput, DescribeDataSourcesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDataSourcesCommandInput extends DescribeDataSourcesInput {
}
export interface DescribeDataSourcesCommandOutput extends DescribeDataSourcesOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of <code>DataSource</code> that match the search criteria in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DescribeDataSourcesCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DescribeDataSourcesCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DescribeDataSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSourcesCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDataSourcesCommand extends $Command<DescribeDataSourcesCommandInput, DescribeDataSourcesCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DescribeDataSourcesCommandInput;
    constructor(input: DescribeDataSourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDataSourcesCommandInput, DescribeDataSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
