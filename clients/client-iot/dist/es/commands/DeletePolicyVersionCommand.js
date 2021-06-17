import { __extends } from "tslib";
import { DeletePolicyVersionRequest } from "../models/models_0";
import { deserializeAws_restJson1DeletePolicyVersionCommand, serializeAws_restJson1DeletePolicyVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified version of the specified policy. You cannot delete the default
 *          version of a policy using this API. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default
 *          version, use ListPolicyVersions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeletePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePolicyVersionCommand = /** @class */ (function (_super) {
    __extends(DeletePolicyVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePolicyVersionCommand(input) {
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
    DeletePolicyVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeletePolicyVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePolicyVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePolicyVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeletePolicyVersionCommand(input, context);
    };
    DeletePolicyVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeletePolicyVersionCommand(output, context);
    };
    return DeletePolicyVersionCommand;
}($Command));
export { DeletePolicyVersionCommand };
//# sourceMappingURL=DeletePolicyVersionCommand.js.map