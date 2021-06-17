import { __extends } from "tslib";
import { GetApnsChannelRequest, GetApnsChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetApnsChannelCommand, serializeAws_restJson1GetApnsChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the APNs channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApnsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApnsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApnsChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApnsChannelCommandInput} for command's `input` shape.
 * @see {@link GetApnsChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetApnsChannelCommand = /** @class */ (function (_super) {
    __extends(GetApnsChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetApnsChannelCommand(input) {
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
    GetApnsChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetApnsChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetApnsChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetApnsChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetApnsChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetApnsChannelCommand(input, context);
    };
    GetApnsChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetApnsChannelCommand(output, context);
    };
    return GetApnsChannelCommand;
}($Command));
export { GetApnsChannelCommand };
//# sourceMappingURL=GetApnsChannelCommand.js.map