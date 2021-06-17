import { __extends } from "tslib";
import { UpdateEmailChannelRequest, UpdateEmailChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateEmailChannelCommand, serializeAws_restJson1UpdateEmailChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the email channel for an application or updates the status and settings of the email channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateEmailChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateEmailChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateEmailChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEmailChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEmailChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateEmailChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEmailChannelCommand(input) {
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
    UpdateEmailChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateEmailChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEmailChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEmailChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEmailChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateEmailChannelCommand(input, context);
    };
    UpdateEmailChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateEmailChannelCommand(output, context);
    };
    return UpdateEmailChannelCommand;
}($Command));
export { UpdateEmailChannelCommand };
//# sourceMappingURL=UpdateEmailChannelCommand.js.map