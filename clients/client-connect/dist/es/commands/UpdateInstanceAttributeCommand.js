import { __extends } from "tslib";
import { UpdateInstanceAttributeRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateInstanceAttributeCommand, serializeAws_restJson1UpdateInstanceAttributeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the value for the specified attribute type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateInstanceAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateInstanceAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateInstanceAttributeCommand = /** @class */ (function (_super) {
    __extends(UpdateInstanceAttributeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateInstanceAttributeCommand(input) {
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
    UpdateInstanceAttributeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateInstanceAttributeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateInstanceAttributeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateInstanceAttributeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateInstanceAttributeCommand(input, context);
    };
    UpdateInstanceAttributeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateInstanceAttributeCommand(output, context);
    };
    return UpdateInstanceAttributeCommand;
}($Command));
export { UpdateInstanceAttributeCommand };
//# sourceMappingURL=UpdateInstanceAttributeCommand.js.map