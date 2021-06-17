import { __extends } from "tslib";
import { AddTagsToStreamInput } from "../models/models_0";
import { deserializeAws_json1_1AddTagsToStreamCommand, serializeAws_json1_1AddTagsToStreamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or updates tags for the specified Kinesis data stream. Each time you invoke
 *             this operation, you can specify up to 10 tags. If you want to add more than 10 tags to
 *             your stream, you can invoke this operation multiple times. In total, each stream can
 *             have up to 50 tags.</p>
 *         <p>If tags have already been assigned to the stream, <code>AddTagsToStream</code>
 *             overwrites any existing tags that correspond to the specified tag keys.</p>
 *         <p>
 *             <a>AddTagsToStream</a> has a limit of five transactions per second per
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, AddTagsToStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, AddTagsToStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new AddTagsToStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToStreamCommandInput} for command's `input` shape.
 * @see {@link AddTagsToStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddTagsToStreamCommand = /** @class */ (function (_super) {
    __extends(AddTagsToStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddTagsToStreamCommand(input) {
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
    AddTagsToStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisClient";
        var commandName = "AddTagsToStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddTagsToStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddTagsToStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AddTagsToStreamCommand(input, context);
    };
    AddTagsToStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AddTagsToStreamCommand(output, context);
    };
    return AddTagsToStreamCommand;
}($Command));
export { AddTagsToStreamCommand };
//# sourceMappingURL=AddTagsToStreamCommand.js.map