import { __extends } from "tslib";
import { GetEmailChannelRequest, GetEmailChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1GetEmailChannelCommand, serializeAws_restJson1GetEmailChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of the email channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetEmailChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEmailChannelCommandInput} for command's `input` shape.
 * @see {@link GetEmailChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEmailChannelCommand = /** @class */ (function (_super) {
    __extends(GetEmailChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEmailChannelCommand(input) {
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
    GetEmailChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetEmailChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEmailChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEmailChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEmailChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEmailChannelCommand(input, context);
    };
    GetEmailChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEmailChannelCommand(output, context);
    };
    return GetEmailChannelCommand;
}($Command));
export { GetEmailChannelCommand };
//# sourceMappingURL=GetEmailChannelCommand.js.map