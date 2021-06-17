import { __extends } from "tslib";
import { DefineExpressionRequest, DefineExpressionResponse } from "../models/models_0";
import { deserializeAws_queryDefineExpressionCommand, serializeAws_queryDefineExpressionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DefineExpressionCommand = /** @class */ (function (_super) {
    __extends(DefineExpressionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DefineExpressionCommand(input) {
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
    DefineExpressionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DefineExpressionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DefineExpressionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DefineExpressionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DefineExpressionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDefineExpressionCommand(input, context);
    };
    DefineExpressionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDefineExpressionCommand(output, context);
    };
    return DefineExpressionCommand;
}($Command));
export { DefineExpressionCommand };
//# sourceMappingURL=DefineExpressionCommand.js.map