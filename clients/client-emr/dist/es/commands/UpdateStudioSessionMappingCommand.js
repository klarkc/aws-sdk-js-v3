import { __extends } from "tslib";
import { UpdateStudioSessionMappingInput } from "../models/models_0";
import { deserializeAws_json1_1UpdateStudioSessionMappingCommand, serializeAws_json1_1UpdateStudioSessionMappingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the session policy attached to the user or group for the specified Amazon EMR
 *          Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, UpdateStudioSessionMappingCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, UpdateStudioSessionMappingCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new UpdateStudioSessionMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioSessionMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioSessionMappingCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStudioSessionMappingCommand = /** @class */ (function (_super) {
    __extends(UpdateStudioSessionMappingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStudioSessionMappingCommand(input) {
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
    UpdateStudioSessionMappingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EMRClient";
        var commandName = "UpdateStudioSessionMappingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStudioSessionMappingInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStudioSessionMappingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateStudioSessionMappingCommand(input, context);
    };
    UpdateStudioSessionMappingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateStudioSessionMappingCommand(output, context);
    };
    return UpdateStudioSessionMappingCommand;
}($Command));
export { UpdateStudioSessionMappingCommand };
//# sourceMappingURL=UpdateStudioSessionMappingCommand.js.map