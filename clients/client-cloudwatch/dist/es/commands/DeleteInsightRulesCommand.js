import { __extends } from "tslib";
import { DeleteInsightRulesInput, DeleteInsightRulesOutput } from "../models/models_0";
import { deserializeAws_queryDeleteInsightRulesCommand, serializeAws_queryDeleteInsightRulesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently deletes the specified Contributor Insights rules.</p>
 * 		       <p>If you create a rule, delete it, and then re-create it with the same name, historical data from the first time
 * 			the rule was created might
 * 			not be available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DeleteInsightRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInsightRulesCommandInput} for command's `input` shape.
 * @see {@link DeleteInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteInsightRulesCommand = /** @class */ (function (_super) {
    __extends(DeleteInsightRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteInsightRulesCommand(input) {
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
    DeleteInsightRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DeleteInsightRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteInsightRulesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteInsightRulesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteInsightRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteInsightRulesCommand(input, context);
    };
    DeleteInsightRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteInsightRulesCommand(output, context);
    };
    return DeleteInsightRulesCommand;
}($Command));
export { DeleteInsightRulesCommand };
//# sourceMappingURL=DeleteInsightRulesCommand.js.map