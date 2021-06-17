import { __extends } from "tslib";
import { GetSmsChannelRequest, GetSmsChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1GetSmsChannelCommand, serializeAws_restJson1GetSmsChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the SMS channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSmsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSmsChannelCommandInput} for command's `input` shape.
 * @see {@link GetSmsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSmsChannelCommand = /** @class */ (function (_super) {
    __extends(GetSmsChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSmsChannelCommand(input) {
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
    GetSmsChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetSmsChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSmsChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSmsChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSmsChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSmsChannelCommand(input, context);
    };
    GetSmsChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSmsChannelCommand(output, context);
    };
    return GetSmsChannelCommand;
}($Command));
export { GetSmsChannelCommand };
//# sourceMappingURL=GetSmsChannelCommand.js.map