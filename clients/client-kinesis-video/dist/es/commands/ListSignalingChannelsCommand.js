import { __extends } from "tslib";
import { ListSignalingChannelsInput, ListSignalingChannelsOutput } from "../models/models_0";
import { deserializeAws_restJson1ListSignalingChannelsCommand, serializeAws_restJson1ListSignalingChannelsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of <code>ChannelInfo</code> objects. Each object describes a
 *             signaling channel. To retrieve only those channels that satisfy a specific condition, you can
 *             specify a <code>ChannelNameCondition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListSignalingChannelsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListSignalingChannelsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new ListSignalingChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSignalingChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSignalingChannelsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSignalingChannelsCommand = /** @class */ (function (_super) {
    __extends(ListSignalingChannelsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSignalingChannelsCommand(input) {
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
    ListSignalingChannelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "ListSignalingChannelsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSignalingChannelsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListSignalingChannelsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSignalingChannelsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSignalingChannelsCommand(input, context);
    };
    ListSignalingChannelsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSignalingChannelsCommand(output, context);
    };
    return ListSignalingChannelsCommand;
}($Command));
export { ListSignalingChannelsCommand };
//# sourceMappingURL=ListSignalingChannelsCommand.js.map