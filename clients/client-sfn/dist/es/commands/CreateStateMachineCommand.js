import { __extends } from "tslib";
import { CreateStateMachineInput, CreateStateMachineOutput } from "../models/models_0";
import { deserializeAws_json1_0CreateStateMachineCommand, serializeAws_json1_0CreateStateMachineCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a state machine. A state machine consists of a collection of states that can do
 *       work (<code>Task</code> states), determine to which states to transition next
 *         (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states),
 *       and so on. State machines are specified using a JSON-based, structured language. For more
 *       information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States
 *         Language</a> in the AWS Step Functions User Guide.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a
 *         duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency
 *         check is based on the state machine <code>name</code>, <code>definition</code>,
 *           <code>type</code>, <code>LoggingConfiguration</code> and <code>TracingConfiguration</code>. If a following request has a
 *         different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and
 *         treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and
 *           <code>tags</code> will not be updated, even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, CreateStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, CreateStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new CreateStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStateMachineCommandInput} for command's `input` shape.
 * @see {@link CreateStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStateMachineCommand = /** @class */ (function (_super) {
    __extends(CreateStateMachineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateStateMachineCommand(input) {
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
    CreateStateMachineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "CreateStateMachineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateStateMachineInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateStateMachineOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateStateMachineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateStateMachineCommand(input, context);
    };
    CreateStateMachineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateStateMachineCommand(output, context);
    };
    return CreateStateMachineCommand;
}($Command));
export { CreateStateMachineCommand };
//# sourceMappingURL=CreateStateMachineCommand.js.map