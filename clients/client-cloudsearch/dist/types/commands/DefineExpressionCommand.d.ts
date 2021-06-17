import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineExpressionRequest, DefineExpressionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DefineExpressionCommandInput extends DefineExpressionRequest {
}
export interface DefineExpressionCommandOutput extends DefineExpressionResponse, __MetadataBearer {
}
/**
 * <p>Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones.  If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineExpressionCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineExpressionCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DefineExpressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DefineExpressionCommandInput} for command's `input` shape.
 * @see {@link DefineExpressionCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DefineExpressionCommand extends $Command<DefineExpressionCommandInput, DefineExpressionCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DefineExpressionCommandInput;
    constructor(input: DefineExpressionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DefineExpressionCommandInput, DefineExpressionCommandOutput>;
    private serialize;
    private deserialize;
}
