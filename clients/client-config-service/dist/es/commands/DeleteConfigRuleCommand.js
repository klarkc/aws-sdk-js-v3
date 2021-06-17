import { __extends } from "tslib";
import { DeleteConfigRuleRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteConfigRuleCommand, serializeAws_json1_1DeleteConfigRuleCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified AWS Config rule and all of its evaluation
 * 			results.</p>
 * 		       <p>AWS Config sets the state of a rule to <code>DELETING</code>
 * 			until the deletion is complete. You cannot update a rule while it is
 * 			in this state. If you make a <code>PutConfigRule</code> or
 * 				<code>DeleteConfigRule</code> request for the rule, you will
 * 			receive a <code>ResourceInUseException</code>.</p>
 * 		       <p>You can check the state of a rule by using the
 * 				<code>DescribeConfigRules</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConfigRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteConfigRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConfigRuleCommand(input) {
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
    DeleteConfigRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteConfigRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConfigRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConfigRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteConfigRuleCommand(input, context);
    };
    DeleteConfigRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteConfigRuleCommand(output, context);
    };
    return DeleteConfigRuleCommand;
}($Command));
export { DeleteConfigRuleCommand };
//# sourceMappingURL=DeleteConfigRuleCommand.js.map