import { __extends } from "tslib";
import { DeleteExpressionRequest, DeleteExpressionResponse } from "../models/models_0";
import { deserializeAws_queryDeleteExpressionCommand, serializeAws_queryDeleteExpressionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DeleteExpressionCommand = /** @class */ (function (_super) {
    __extends(DeleteExpressionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteExpressionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DeleteExpressionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DeleteExpressionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteExpressionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteExpressionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteExpressionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteExpressionCommand(input, context);
    };
    DeleteExpressionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteExpressionCommand(output, context);
    };
    return DeleteExpressionCommand;
}($Command));
export { DeleteExpressionCommand };
//# sourceMappingURL=DeleteExpressionCommand.js.map