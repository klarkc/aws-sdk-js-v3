import { __extends } from "tslib";
import { DescribeSignalingChannelInput, DescribeSignalingChannelOutput } from "../models/models_0";
import { deserializeAws_restJson1DescribeSignalingChannelCommand, serializeAws_restJson1DescribeSignalingChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the most current information about the signaling channel. You must specify
 *             either the name or the Amazon Resource Name (ARN) of the channel that you want to
 *             describe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DescribeSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSignalingChannelCommand = /** @class */ (function (_super) {
    __extends(DescribeSignalingChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSignalingChannelCommand(input) {
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
    DescribeSignalingChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "DescribeSignalingChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSignalingChannelInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSignalingChannelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSignalingChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSignalingChannelCommand(input, context);
    };
    DescribeSignalingChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSignalingChannelCommand(output, context);
    };
    return DescribeSignalingChannelCommand;
}($Command));
export { DescribeSignalingChannelCommand };
//# sourceMappingURL=DescribeSignalingChannelCommand.js.map