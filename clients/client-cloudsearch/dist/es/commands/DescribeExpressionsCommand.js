import { __extends } from "tslib";
import { DescribeExpressionsRequest, DescribeExpressionsResponse } from "../models/models_0";
import { deserializeAws_queryDescribeExpressionsCommand, serializeAws_queryDescribeExpressionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeExpressionsCommand = /** @class */ (function (_super) {
    __extends(DescribeExpressionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeExpressionsCommand(input) {
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
    DescribeExpressionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "DescribeExpressionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExpressionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeExpressionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExpressionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeExpressionsCommand(input, context);
    };
    DescribeExpressionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeExpressionsCommand(output, context);
    };
    return DescribeExpressionsCommand;
}($Command));
export { DescribeExpressionsCommand };
//# sourceMappingURL=DescribeExpressionsCommand.js.map