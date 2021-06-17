import { __extends } from "tslib";
import { GetVoiceChannelRequest, GetVoiceChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1GetVoiceChannelCommand, serializeAws_restJson1GetVoiceChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the voice channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetVoiceChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetVoiceChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetVoiceChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetVoiceChannelCommandInput} for command's `input` shape.
 * @see {@link GetVoiceChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetVoiceChannelCommand = /** @class */ (function (_super) {
    __extends(GetVoiceChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetVoiceChannelCommand(input) {
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
    GetVoiceChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetVoiceChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetVoiceChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetVoiceChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetVoiceChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetVoiceChannelCommand(input, context);
    };
    GetVoiceChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetVoiceChannelCommand(output, context);
    };
    return GetVoiceChannelCommand;
}($Command));
export { GetVoiceChannelCommand };
//# sourceMappingURL=GetVoiceChannelCommand.js.map