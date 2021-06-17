import { __extends } from "tslib";
import { GetApnsVoipChannelRequest, GetApnsVoipChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetApnsVoipChannelCommand, serializeAws_restJson1GetApnsVoipChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the APNs VoIP channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApnsVoipChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApnsVoipChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApnsVoipChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApnsVoipChannelCommandInput} for command's `input` shape.
 * @see {@link GetApnsVoipChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApnsVoipChannelCommand = /** @class */ (function (_super) {
    __extends(GetApnsVoipChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApnsVoipChannelCommand(input) {
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
    GetApnsVoipChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetApnsVoipChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApnsVoipChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetApnsVoipChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApnsVoipChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetApnsVoipChannelCommand(input, context);
    };
    GetApnsVoipChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetApnsVoipChannelCommand(output, context);
    };
    return GetApnsVoipChannelCommand;
}($Command));
export { GetApnsVoipChannelCommand };
//# sourceMappingURL=GetApnsVoipChannelCommand.js.map