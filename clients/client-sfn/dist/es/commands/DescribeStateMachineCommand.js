import { __extends } from "tslib";
import { DescribeStateMachineInput, DescribeStateMachineOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeStateMachineCommand, serializeAws_json1_0DescribeStateMachineCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a state machine.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStateMachineCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeStateMachineCommand = /** @class */ (function (_super) {
    __extends(DescribeStateMachineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeStateMachineCommand(input) {
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
    DescribeStateMachineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "DescribeStateMachineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeStateMachineInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeStateMachineOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeStateMachineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeStateMachineCommand(input, context);
    };
    DescribeStateMachineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeStateMachineCommand(output, context);
    };
    return DescribeStateMachineCommand;
}($Command));
export { DescribeStateMachineCommand };
//# sourceMappingURL=DescribeStateMachineCommand.js.map