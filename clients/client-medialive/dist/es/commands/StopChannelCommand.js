import { __extends } from "tslib";
import { StopChannelRequest, StopChannelResponse } from "../models/models_1";
import { deserializeAws_restJson1StopChannelCommand, serializeAws_restJson1StopChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Stops a running channel
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StopChannelCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StopChannelCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new StopChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopChannelCommandInput} for command's `input` shape.
 * @see {@link StopChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopChannelCommand = /** @class */ (function (_super) {
    __extends(StopChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopChannelCommand(input) {
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
    StopChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "StopChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StopChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StopChannelCommand(input, context);
    };
    StopChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StopChannelCommand(output, context);
    };
    return StopChannelCommand;
}($Command));
export { StopChannelCommand };
//# sourceMappingURL=StopChannelCommand.js.map