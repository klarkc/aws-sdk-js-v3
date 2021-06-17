import { __extends } from "tslib";
import { DeleteActivationRequest, DeleteActivationResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteActivationCommand, serializeAws_json1_1DeleteActivationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an activation. You are not required to delete an activation. If you delete an
 *    activation, you can no longer use it to register additional managed instances. Deleting an
 *    activation does not de-register managed instances. You must manually de-register managed
 *    instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteActivationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActivationCommandInput} for command's `input` shape.
 * @see {@link DeleteActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteActivationCommand = /** @class */ (function (_super) {
    __extends(DeleteActivationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteActivationCommand(input) {
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
    DeleteActivationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteActivationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteActivationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteActivationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteActivationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteActivationCommand(input, context);
    };
    DeleteActivationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteActivationCommand(output, context);
    };
    return DeleteActivationCommand;
}($Command));
export { DeleteActivationCommand };
//# sourceMappingURL=DeleteActivationCommand.js.map