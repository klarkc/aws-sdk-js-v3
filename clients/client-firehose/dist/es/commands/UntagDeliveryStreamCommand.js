import { __extends } from "tslib";
import { UntagDeliveryStreamInput, UntagDeliveryStreamOutput } from "../models/models_0";
import { deserializeAws_json1_1UntagDeliveryStreamCommand, serializeAws_json1_1UntagDeliveryStreamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes tags from the specified delivery stream. Removed tags are deleted, and you
 *          can't recover them after this operation successfully completes.</p>
 *          <p>If you specify a tag that doesn't exist, the operation ignores it.</p>
 *          <p>This operation has a limit of five transactions per second per account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, UntagDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, UntagDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new UntagDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link UntagDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagDeliveryStreamCommand = /** @class */ (function (_super) {
    __extends(UntagDeliveryStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UntagDeliveryStreamCommand(input) {
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
    UntagDeliveryStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FirehoseClient";
        var commandName = "UntagDeliveryStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UntagDeliveryStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: UntagDeliveryStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UntagDeliveryStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UntagDeliveryStreamCommand(input, context);
    };
    UntagDeliveryStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UntagDeliveryStreamCommand(output, context);
    };
    return UntagDeliveryStreamCommand;
}($Command));
export { UntagDeliveryStreamCommand };
//# sourceMappingURL=UntagDeliveryStreamCommand.js.map