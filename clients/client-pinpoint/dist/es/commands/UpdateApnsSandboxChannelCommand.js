import { __extends } from "tslib";
import { UpdateApnsSandboxChannelRequest, UpdateApnsSandboxChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateApnsSandboxChannelCommand, serializeAws_restJson1UpdateApnsSandboxChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApnsSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApnsSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApnsSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApnsSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateApnsSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateApnsSandboxChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateApnsSandboxChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateApnsSandboxChannelCommand(input) {
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
    UpdateApnsSandboxChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateApnsSandboxChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateApnsSandboxChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateApnsSandboxChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateApnsSandboxChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateApnsSandboxChannelCommand(input, context);
    };
    UpdateApnsSandboxChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateApnsSandboxChannelCommand(output, context);
    };
    return UpdateApnsSandboxChannelCommand;
}($Command));
export { UpdateApnsSandboxChannelCommand };
//# sourceMappingURL=UpdateApnsSandboxChannelCommand.js.map