import { __extends } from "tslib";
import { DescribeStreamInput, DescribeStreamOutput } from "../models/models_0";
import { deserializeAws_restJson1DescribeStreamCommand, serializeAws_restJson1DescribeStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the most current information about the specified stream. You must specify
 *             either the <code>StreamName</code> or the <code>StreamARN</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeStreamCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeStreamCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const command = new DescribeStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStreamCommandInput} for command's `input` shape.
 * @see {@link DescribeStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStreamCommand = /** @class */ (function (_super) {
    __extends(DescribeStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStreamCommand(input) {
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
    DescribeStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KinesisVideoClient";
        var commandName = "DescribeStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStreamInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStreamOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeStreamCommand(input, context);
    };
    DescribeStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeStreamCommand(output, context);
    };
    return DescribeStreamCommand;
}($Command));
export { DescribeStreamCommand };
//# sourceMappingURL=DescribeStreamCommand.js.map