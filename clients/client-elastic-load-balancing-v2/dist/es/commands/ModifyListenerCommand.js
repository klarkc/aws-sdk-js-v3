import { __extends } from "tslib";
import { ModifyListenerInput, ModifyListenerOutput } from "../models/models_0";
import { deserializeAws_queryModifyListenerCommand, serializeAws_queryModifyListenerCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces the specified properties of the specified listener. Any properties that you do
 *       not specify remain unchanged.</p>
 *          <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy
 *       and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP
 *       to TLS, you must add the security policy and default certificate properties.</p>
 *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
 *       must provide the entire list. For example, to add an action, specify a list with the current
 *       actions plus the new action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyListenerCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyListenerCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new ModifyListenerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyListenerCommandInput} for command's `input` shape.
 * @see {@link ModifyListenerCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyListenerCommand = /** @class */ (function (_super) {
    __extends(ModifyListenerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyListenerCommand(input) {
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
    ModifyListenerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticLoadBalancingV2Client";
        var commandName = "ModifyListenerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyListenerInput.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyListenerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyListenerCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyListenerCommand(input, context);
    };
    ModifyListenerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyListenerCommand(output, context);
    };
    return ModifyListenerCommand;
}($Command));
export { ModifyListenerCommand };
//# sourceMappingURL=ModifyListenerCommand.js.map