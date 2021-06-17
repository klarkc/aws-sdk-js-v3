import { __extends } from "tslib";
import { TagStreamInput, TagStreamOutput } from "../models/models_0";
import { deserializeAws_restJson1TagStreamCommand, serializeAws_restJson1TagStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds one or more tags to a stream. A <i>tag</i> is a key-value pair
 *             (the value is optional) that you can define and assign to AWS resources. If you specify
 *             a tag that already exists, the tag value is replaced with the value that you specify in
 *             the request. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation
 *                 Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>. </p>
 *         <p>You must provide either the <code>StreamName</code> or the
 *             <code>StreamARN</code>.</p>
 *         <p>This operation requires permission for the <code>KinesisVideo:TagStream</code>
 *             action.</p>
 *         <p>Kinesis video streams support up to 50 tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, TagStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, TagStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new TagStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagStreamCommandInput} for command's `input` shape.
 * @see {@link TagStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagStreamCommand = /** @class */ (function (_super) {
    __extends(TagStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TagStreamCommand(input) {
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
    TagStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "TagStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TagStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: TagStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TagStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1TagStreamCommand(input, context);
    };
    TagStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1TagStreamCommand(output, context);
    };
    return TagStreamCommand;
}($Command));
export { TagStreamCommand };
//# sourceMappingURL=TagStreamCommand.js.map