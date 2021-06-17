import { __extends } from "tslib";
import { DescribeStateMachineForExecutionInput, DescribeStateMachineForExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeStateMachineForExecutionCommand, serializeAws_json1_0DescribeStateMachineForExecutionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the state machine associated with a specific execution.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineForExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineForExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeStateMachineForExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStateMachineForExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStateMachineForExecutionCommand = /** @class */ (function (_super) {
    __extends(DescribeStateMachineForExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStateMachineForExecutionCommand(input) {
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
    DescribeStateMachineForExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "DescribeStateMachineForExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStateMachineForExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStateMachineForExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStateMachineForExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeStateMachineForExecutionCommand(input, context);
    };
    DescribeStateMachineForExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeStateMachineForExecutionCommand(output, context);
    };
    return DescribeStateMachineForExecutionCommand;
}($Command));
export { DescribeStateMachineForExecutionCommand };
//# sourceMappingURL=DescribeStateMachineForExecutionCommand.js.map