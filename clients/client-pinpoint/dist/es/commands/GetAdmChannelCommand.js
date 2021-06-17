import { __extends } from "tslib";
import { GetAdmChannelRequest, GetAdmChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAdmChannelCommand, serializeAws_restJson1GetAdmChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the ADM channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetAdmChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetAdmChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetAdmChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAdmChannelCommandInput} for command's `input` shape.
 * @see {@link GetAdmChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAdmChannelCommand = /** @class */ (function (_super) {
    __extends(GetAdmChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAdmChannelCommand(input) {
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
    GetAdmChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetAdmChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAdmChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAdmChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAdmChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAdmChannelCommand(input, context);
    };
    GetAdmChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAdmChannelCommand(output, context);
    };
    return GetAdmChannelCommand;
}($Command));
export { GetAdmChannelCommand };
//# sourceMappingURL=GetAdmChannelCommand.js.map