import { __extends } from "tslib";
import { AttachPrincipalPolicyRequest } from "../models/models_0";
import { deserializeAws_restJson1AttachPrincipalPolicyCommand, serializeAws_restJson1AttachPrincipalPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>Attaches the specified policy to the specified principal (certificate or other
 *          credential).</p>
 *          <p>
 *             <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AttachPrincipalPolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AttachPrincipalPolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AttachPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AttachPrincipalPolicyCommand = /** @class */ (function (_super) {
    __extends(AttachPrincipalPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AttachPrincipalPolicyCommand(input) {
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
    AttachPrincipalPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "AttachPrincipalPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AttachPrincipalPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AttachPrincipalPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AttachPrincipalPolicyCommand(input, context);
    };
    AttachPrincipalPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AttachPrincipalPolicyCommand(output, context);
    };
    return AttachPrincipalPolicyCommand;
}($Command));
export { AttachPrincipalPolicyCommand };
//# sourceMappingURL=AttachPrincipalPolicyCommand.js.map