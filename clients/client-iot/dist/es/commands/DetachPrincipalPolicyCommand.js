import { __extends } from "tslib";
import { DetachPrincipalPolicyRequest } from "../models/models_1";
import { deserializeAws_restJson1DetachPrincipalPolicyCommand, serializeAws_restJson1DetachPrincipalPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Removes the specified policy from the specified certificate.</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>DetachPolicy</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachPrincipalPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachPrincipalPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DetachPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DetachPrincipalPolicyCommand = /** @class */ (function (_super) {
    __extends(DetachPrincipalPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DetachPrincipalPolicyCommand(input) {
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
    DetachPrincipalPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DetachPrincipalPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DetachPrincipalPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DetachPrincipalPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DetachPrincipalPolicyCommand(input, context);
    };
    DetachPrincipalPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DetachPrincipalPolicyCommand(output, context);
    };
    return DetachPrincipalPolicyCommand;
}($Command));
export { DetachPrincipalPolicyCommand };
//# sourceMappingURL=DetachPrincipalPolicyCommand.js.map