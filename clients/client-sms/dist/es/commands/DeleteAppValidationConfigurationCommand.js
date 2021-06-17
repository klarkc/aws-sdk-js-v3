import { __extends } from "tslib";
import { DeleteAppValidationConfigurationRequest, DeleteAppValidationConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAppValidationConfigurationCommand, serializeAws_json1_1DeleteAppValidationConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the validation configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAppValidationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppValidationConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteAppValidationConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAppValidationConfigurationCommand(input) {
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
    DeleteAppValidationConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "DeleteAppValidationConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAppValidationConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAppValidationConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAppValidationConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAppValidationConfigurationCommand(input, context);
    };
    DeleteAppValidationConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAppValidationConfigurationCommand(output, context);
    };
    return DeleteAppValidationConfigurationCommand;
}($Command));
export { DeleteAppValidationConfigurationCommand };
//# sourceMappingURL=DeleteAppValidationConfigurationCommand.js.map