import { __extends } from "tslib";
import { UpdateStreamInput, UpdateStreamOutput } from "../models/models_0";
import { deserializeAws_restJson1UpdateStreamCommand, serializeAws_restJson1UpdateStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates stream metadata, such as the device name and media type.</p>
 *         <p>You must provide the stream name or the Amazon Resource Name (ARN) of the
 *             stream.</p>
 *         <p>To make sure that you have the latest version of the stream before updating it, you
 *             can specify the stream version. Kinesis Video Streams assigns a version to each stream.
 *             When you update a stream, Kinesis Video Streams assigns a new version number. To get the
 *             latest stream version, use the <code>DescribeStream</code> API. </p>
 *         <p>
 *             <code>UpdateStream</code> is an asynchronous operation, and takes time to
 *             complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new UpdateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStreamCommand = /** @class */ (function (_super) {
    __extends(UpdateStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStreamCommand(input) {
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
    UpdateStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "UpdateStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateStreamCommand(input, context);
    };
    UpdateStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateStreamCommand(output, context);
    };
    return UpdateStreamCommand;
}($Command));
export { UpdateStreamCommand };
//# sourceMappingURL=UpdateStreamCommand.js.map