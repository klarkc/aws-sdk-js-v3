import { __extends } from "tslib";
import { DeleteSignalingChannelInput, DeleteSignalingChannelOutput } from "../models/models_0";
import { deserializeAws_restJson1DeleteSignalingChannelCommand, serializeAws_restJson1DeleteSignalingChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified signaling channel. <code>DeleteSignalingChannel</code> is an
 *             asynchronous operation. If you don't specify the channel's current version, the most
 *             recent version is deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DeleteSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DeleteSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DeleteSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSignalingChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteSignalingChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSignalingChannelCommand(input) {
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
    DeleteSignalingChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "DeleteSignalingChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSignalingChannelInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSignalingChannelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSignalingChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSignalingChannelCommand(input, context);
    };
    DeleteSignalingChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSignalingChannelCommand(output, context);
    };
    return DeleteSignalingChannelCommand;
}($Command));
export { DeleteSignalingChannelCommand };
//# sourceMappingURL=DeleteSignalingChannelCommand.js.map