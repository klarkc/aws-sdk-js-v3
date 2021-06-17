import { __extends } from "tslib";
import { CreateStreamInput, CreateStreamOutput } from "../models/models_0";
import { deserializeAws_restJson1CreateStreamCommand, serializeAws_restJson1CreateStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Kinesis video stream. </p>
 *
 *         <p>When you create a new stream, Kinesis Video Streams assigns it a version number.
 *             When you change the stream's metadata, Kinesis Video Streams updates the version. </p>
 *         <p>
 *             <code>CreateStream</code> is an asynchronous operation.</p>
 *         <p>For information about how the service works, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/how-it-works.html">How it Works</a>. </p>
 *         <p>You must have permissions for the <code>KinesisVideo:CreateStream</code>
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, CreateStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, CreateStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new CreateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamCommandInput} for command's `input` shape.
 * @see {@link CreateStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStreamCommand = /** @class */ (function (_super) {
    __extends(CreateStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStreamCommand(input) {
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
    CreateStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "CreateStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateStreamCommand(input, context);
    };
    CreateStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateStreamCommand(output, context);
    };
    return CreateStreamCommand;
}($Command));
export { CreateStreamCommand };
//# sourceMappingURL=CreateStreamCommand.js.map