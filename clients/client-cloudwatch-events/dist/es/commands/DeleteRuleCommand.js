import { __extends } from "tslib";
import { DeleteRuleRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteRuleCommand, serializeAws_json1_1DeleteRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified rule.</p>
 *          <p>Before you can delete the rule, you must remove all targets, using <a>RemoveTargets</a>.</p>
 *
 *          <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow
 *       a short period of time for changes to take effect.</p>
 *
 *          <p>Managed rules are rules created and managed by another AWS service on your behalf. These
 *       rules are created by those other AWS services to support functionality in those services. You
 *       can delete these rules using the <code>Force</code> option, but you should do so only if you
 *       are sure the other service is not still using that rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeleteRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeleteRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DeleteRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRuleCommand(input) {
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
    DeleteRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "DeleteRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRuleCommand(input, context);
    };
    DeleteRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRuleCommand(output, context);
    };
    return DeleteRuleCommand;
}($Command));
export { DeleteRuleCommand };
//# sourceMappingURL=DeleteRuleCommand.js.map