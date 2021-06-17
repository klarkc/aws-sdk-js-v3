import { __extends } from "tslib";
import { GetApnsVoipSandboxChannelRequest, GetApnsVoipSandboxChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetApnsVoipSandboxChannelCommand, serializeAws_restJson1GetApnsVoipSandboxChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApnsVoipSandboxChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApnsVoipSandboxChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApnsVoipSandboxChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApnsVoipSandboxChannelCommandInput} for command's `input` shape.
 * @see {@link GetApnsVoipSandboxChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApnsVoipSandboxChannelCommand = /** @class */ (function (_super) {
    __extends(GetApnsVoipSandboxChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApnsVoipSandboxChannelCommand(input) {
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
    GetApnsVoipSandboxChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetApnsVoipSandboxChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApnsVoipSandboxChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetApnsVoipSandboxChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApnsVoipSandboxChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetApnsVoipSandboxChannelCommand(input, context);
    };
    GetApnsVoipSandboxChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetApnsVoipSandboxChannelCommand(output, context);
    };
    return GetApnsVoipSandboxChannelCommand;
}($Command));
export { GetApnsVoipSandboxChannelCommand };
//# sourceMappingURL=GetApnsVoipSandboxChannelCommand.js.map