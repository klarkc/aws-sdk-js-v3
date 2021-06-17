import { __extends } from "tslib";
import { SetDefaultPolicyVersionRequest } from "../models/models_2";
import { deserializeAws_restJson1SetDefaultPolicyVersionCommand, serializeAws_restJson1SetDefaultPolicyVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the specified version of the specified policy as the policy's default
 *          (operative) version. This action affects all certificates to which the policy is attached.
 *          To list the principals the policy is attached to, use the ListPrincipalPolicy
 *          API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetDefaultPolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetDefaultPolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetDefaultPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDefaultPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link SetDefaultPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetDefaultPolicyVersionCommand = /** @class */ (function (_super) {
    __extends(SetDefaultPolicyVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetDefaultPolicyVersionCommand(input) {
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
    SetDefaultPolicyVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "SetDefaultPolicyVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetDefaultPolicyVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetDefaultPolicyVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SetDefaultPolicyVersionCommand(input, context);
    };
    SetDefaultPolicyVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SetDefaultPolicyVersionCommand(output, context);
    };
    return SetDefaultPolicyVersionCommand;
}($Command));
export { SetDefaultPolicyVersionCommand };
//# sourceMappingURL=SetDefaultPolicyVersionCommand.js.map