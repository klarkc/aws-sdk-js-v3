import { __extends } from "tslib";
import { GetGcmChannelRequest, GetGcmChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetGcmChannelCommand, serializeAws_restJson1GetGcmChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the GCM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetGcmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetGcmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetGcmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGcmChannelCommandInput} for command's `input` shape.
 * @see {@link GetGcmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGcmChannelCommand = /** @class */ (function (_super) {
    __extends(GetGcmChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGcmChannelCommand(input) {
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
    GetGcmChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetGcmChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGcmChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGcmChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGcmChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGcmChannelCommand(input, context);
    };
    GetGcmChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGcmChannelCommand(output, context);
    };
    return GetGcmChannelCommand;
}($Command));
export { GetGcmChannelCommand };
//# sourceMappingURL=GetGcmChannelCommand.js.map