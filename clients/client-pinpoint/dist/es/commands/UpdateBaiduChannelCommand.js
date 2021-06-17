import { __extends } from "tslib";
import { UpdateBaiduChannelRequest, UpdateBaiduChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateBaiduChannelCommand, serializeAws_restJson1UpdateBaiduChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateBaiduChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateBaiduChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateBaiduChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBaiduChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateBaiduChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBaiduChannelCommand(input) {
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
    UpdateBaiduChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "UpdateBaiduChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBaiduChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBaiduChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBaiduChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateBaiduChannelCommand(input, context);
    };
    UpdateBaiduChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateBaiduChannelCommand(output, context);
    };
    return UpdateBaiduChannelCommand;
}($Command));
export { UpdateBaiduChannelCommand };
//# sourceMappingURL=UpdateBaiduChannelCommand.js.map