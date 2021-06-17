import { __extends } from "tslib";
import { ListRulesRequest, ListRulesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRulesCommand, serializeAws_json1_1ListRulesCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide
 *       a prefix to match to the rule names.</p>
 *
 *          <p>ListRules does not list the targets of a rule. To see the targets associated with a rule,
 *       use <a>ListTargetsByRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListRulesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListRulesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRulesCommandInput} for command's `input` shape.
 * @see {@link ListRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRulesCommand = /** @class */ (function (_super) {
    __extends(ListRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRulesCommand(input) {
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
    ListRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "ListRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRulesCommand(input, context);
    };
    ListRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRulesCommand(output, context);
    };
    return ListRulesCommand;
}($Command));
export { ListRulesCommand };
//# sourceMappingURL=ListRulesCommand.js.map