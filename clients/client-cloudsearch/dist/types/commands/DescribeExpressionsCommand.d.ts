import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeExpressionsRequest, DescribeExpressionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeExpressionsCommandInput extends DescribeExpressionsRequest {
}
export interface DescribeExpressionsCommandOutput extends DescribeExpressionsResponse, __MetadataBearer {
}
/**
 * <p>Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeExpressionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeExpressionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeExpressionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExpressionsCommandInput} for command's `input` shape.
 * @see {@link DescribeExpressionsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeExpressionsCommand extends $Command<DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeExpressionsCommandInput;
    constructor(input: DescribeExpressionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput>;
    private serialize;
    private deserialize;
}
