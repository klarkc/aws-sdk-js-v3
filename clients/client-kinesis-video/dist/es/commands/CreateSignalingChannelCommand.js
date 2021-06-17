import { __extends } from "tslib";
import { CreateSignalingChannelInput, CreateSignalingChannelOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateSignalingChannelCommand, serializeAws_restJson1CreateSignalingChannelCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a signaling channel. </p>
 *         <p>
 *             <code>CreateSignalingChannel</code> is an asynchronous operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, CreateSignalingChannelCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, CreateSignalingChannelCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new CreateSignalingChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSignalingChannelCommandInput} for command's `input` shape.
 * @see {@link CreateSignalingChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSignalingChannelCommand = /** @class */ (function (_super) {
    __extends(CreateSignalingChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSignalingChannelCommand(input) {
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
    CreateSignalingChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "CreateSignalingChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSignalingChannelInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSignalingChannelOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSignalingChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSignalingChannelCommand(input, context);
    };
    CreateSignalingChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSignalingChannelCommand(output, context);
    };
    return CreateSignalingChannelCommand;
}($Command));
export { CreateSignalingChannelCommand };
//# sourceMappingURL=CreateSignalingChannelCommand.js.map