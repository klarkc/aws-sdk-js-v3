import { __extends } from "tslib";
import { DeleteChannelRequest, DeleteChannelResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteChannelCommand, serializeAws_restJson1DeleteChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a channel. You must stop the channel before it can be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteChannelCommand(input) {
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
    DeleteChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaTailorClient";
        var commandName = "DeleteChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteChannelResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteChannelCommand(input, context);
    };
    DeleteChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteChannelCommand(output, context);
    };
    return DeleteChannelCommand;
}($Command));
export { DeleteChannelCommand };
//# sourceMappingURL=DeleteChannelCommand.js.map