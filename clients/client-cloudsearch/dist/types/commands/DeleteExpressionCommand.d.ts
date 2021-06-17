import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteExpressionRequest, DeleteExpressionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteExpressionCommandInput extends DeleteExpressionRequest {
}
export interface DeleteExpressionCommandOutput extends DeleteExpressionResponse, __MetadataBearer {
}
/**
 * <p>Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DeleteExpressionCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DeleteExpressionCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DeleteExpressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExpressionCommandInput} for command's `input` shape.
 * @see {@link DeleteExpressionCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteExpressionCommand extends $Command<DeleteExpressionCommandInput, DeleteExpressionCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteExpressionCommandInput;
    constructor(input: DeleteExpressionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteExpressionCommandInput, DeleteExpressionCommandOutput>;
    private serialize;
    private deserialize;
}
