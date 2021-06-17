import { __extends } from "tslib";
import { DescribeDeliveryStreamInput, DescribeDeliveryStreamOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeDeliveryStreamCommand, serializeAws_json1_1DescribeDeliveryStreamCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the specified delivery stream and its status. For example, after your
 *          delivery stream is created, call <code>DescribeDeliveryStream</code> to see whether the
 *          delivery stream is <code>ACTIVE</code> and therefore ready for data to be sent to it. </p>
 *          <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status
 *          doesn't change, and you can't invoke <a>CreateDeliveryStream</a> again on it.
 *          However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete it.
 *          If the status is <code>DELETING_FAILED</code>, you can force deletion by invoking <a>DeleteDeliveryStream</a> again but with <a>DeleteDeliveryStreamInput$AllowForceDelete</a> set to true.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, DescribeDeliveryStreamCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, DescribeDeliveryStreamCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const command = new DescribeDeliveryStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDeliveryStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryStreamCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDeliveryStreamCommand = /** @class */ (function (_super) {
    __extends(DescribeDeliveryStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDeliveryStreamCommand(input) {
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
    DescribeDeliveryStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FirehoseClient";
        var commandName = "DescribeDeliveryStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDeliveryStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDeliveryStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDeliveryStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDeliveryStreamCommand(input, context);
    };
    DescribeDeliveryStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDeliveryStreamCommand(output, context);
    };
    return DescribeDeliveryStreamCommand;
}($Command));
export { DescribeDeliveryStreamCommand };
//# sourceMappingURL=DescribeDeliveryStreamCommand.js.map