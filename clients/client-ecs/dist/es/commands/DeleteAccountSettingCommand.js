import { __extends } from "tslib";
import { DeleteAccountSettingRequest, DeleteAccountSettingResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAccountSettingCommand, serializeAws_json1_1DeleteAccountSettingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables an account setting for a specified IAM user, IAM role, or the root user for
 * 			an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteAccountSettingCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteAccountSettingCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteAccountSettingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountSettingCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountSettingCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAccountSettingCommand = /** @class */ (function (_super) {
    __extends(DeleteAccountSettingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAccountSettingCommand(input) {
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
    DeleteAccountSettingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "DeleteAccountSettingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAccountSettingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAccountSettingResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAccountSettingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAccountSettingCommand(input, context);
    };
    DeleteAccountSettingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAccountSettingCommand(output, context);
    };
    return DeleteAccountSettingCommand;
}($Command));
export { DeleteAccountSettingCommand };
//# sourceMappingURL=DeleteAccountSettingCommand.js.map