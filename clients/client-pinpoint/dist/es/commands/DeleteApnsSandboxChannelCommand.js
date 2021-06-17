import { __extends } from "tslib";
import { DeleteApnsSandboxChannelRequest, DeleteApnsSandboxChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteApnsSandboxChannelCommand, serializeAws_restJson1DeleteApnsSandboxChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApnsSandboxChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteApnsSandboxChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteApnsSandboxChannelCommand(input) {
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
    DeleteApnsSandboxChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteApnsSandboxChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteApnsSandboxChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteApnsSandboxChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteApnsSandboxChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteApnsSandboxChannelCommand(input, context);
    };
    DeleteApnsSandboxChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteApnsSandboxChannelCommand(output, context);
    };
    return DeleteApnsSandboxChannelCommand;
}($Command));
export { DeleteApnsSandboxChannelCommand };
//# sourceMappingURL=DeleteApnsSandboxChannelCommand.js.map