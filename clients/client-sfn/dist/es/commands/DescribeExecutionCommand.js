import { __extends } from "tslib";
import { DescribeExecutionInput, DescribeExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeExecutionCommand, serializeAws_json1_0DescribeExecutionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an execution.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExecutionCommand = /** @class */ (function (_super) {
    __extends(DescribeExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeExecutionCommand(input) {
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
    DescribeExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "DescribeExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeExecutionCommand(input, context);
    };
    DescribeExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeExecutionCommand(output, context);
    };
    return DescribeExecutionCommand;
}($Command));
export { DescribeExecutionCommand };
//# sourceMappingURL=DescribeExecutionCommand.js.map