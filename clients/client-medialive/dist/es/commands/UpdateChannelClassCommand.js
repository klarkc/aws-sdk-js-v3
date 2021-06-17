import { __extends } from "tslib";
import { UpdateChannelClassRequest, UpdateChannelClassResponse } from "../models/models_1";
import { deserializeAws_restJson1UpdateChannelClassCommand, serializeAws_restJson1UpdateChannelClassCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Changes the class of the channel.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateChannelClassCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateChannelClassCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateChannelClassCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateChannelClassCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelClassCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateChannelClassCommand = /** @class */ (function (_super) {
    __extends(UpdateChannelClassCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateChannelClassCommand(input) {
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
    UpdateChannelClassCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaLiveClient";
        var commandName = "UpdateChannelClassCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateChannelClassRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateChannelClassResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateChannelClassCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateChannelClassCommand(input, context);
    };
    UpdateChannelClassCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateChannelClassCommand(output, context);
    };
    return UpdateChannelClassCommand;
}($Command));
export { UpdateChannelClassCommand };
//# sourceMappingURL=UpdateChannelClassCommand.js.map