import { __extends } from "tslib";
import { UpdateSignalingChannelInput, UpdateSignalingChannelOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateSignalingChannelCommand, serializeAws_restJson1UpdateSignalingChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the existing signaling channel. This is an asynchronous operation and takes
 *             time to complete. </p>
 *         <p>If the <code>MessageTtlSeconds</code> value is updated (either increased or reduced),
 *             it only applies to new messages sent via this channel after it's been updated. Existing
 *             messages are still expired as per the previous <code>MessageTtlSeconds</code>
 *             value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSignalingChannelCommand = /** @class */ (function (_super) {
    __extends(UpdateSignalingChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSignalingChannelCommand(input) {
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
    UpdateSignalingChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "UpdateSignalingChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSignalingChannelInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSignalingChannelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSignalingChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSignalingChannelCommand(input, context);
    };
    UpdateSignalingChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSignalingChannelCommand(output, context);
    };
    return UpdateSignalingChannelCommand;
}($Command));
export { UpdateSignalingChannelCommand };
//# sourceMappingURL=UpdateSignalingChannelCommand.js.map