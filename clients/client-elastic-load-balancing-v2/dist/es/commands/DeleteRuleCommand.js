import { __extends } from "tslib";
import { DeleteRuleInput, DeleteRuleOutput } from "../models/models_0";
import { deserializeAws_queryDeleteRuleCommand, serializeAws_queryDeleteRuleCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified rule.</p>
 *          <p>You can't delete the default rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteRuleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteRuleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DeleteRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "DeleteRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRuleInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRuleOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteRuleCommand(input, context);
    };
    DeleteRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteRuleCommand(output, context);
    };
    return DeleteRuleCommand;
}($Command));
export { DeleteRuleCommand };
//# sourceMappingURL=DeleteRuleCommand.js.map