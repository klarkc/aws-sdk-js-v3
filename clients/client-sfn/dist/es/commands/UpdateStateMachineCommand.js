import { __extends } from "tslib";
import { UpdateStateMachineInput, UpdateStateMachineOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateStateMachineCommand, serializeAws_json1_0UpdateStateMachineCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing state machine by modifying its <code>definition</code>,
 *         <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue
 *       to use the previous <code>definition</code> and <code>roleArn</code>. You must include at
 *       least one of <code>definition</code> or <code>roleArn</code> or you will receive a
 *         <code>MissingRequiredParameter</code> error.</p>
 *          <note>
 *             <p>All <code>StartExecution</code> calls within a few seconds will use the updated
 *           <code>definition</code> and <code>roleArn</code>. Executions started immediately after
 *         calling <code>UpdateStateMachine</code> may use the previous state machine
 *           <code>definition</code> and <code>roleArn</code>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, UpdateStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, UpdateStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new UpdateStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStateMachineCommandInput} for command's `input` shape.
 * @see {@link UpdateStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStateMachineCommand = /** @class */ (function (_super) {
    __extends(UpdateStateMachineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStateMachineCommand(input) {
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
    UpdateStateMachineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "UpdateStateMachineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStateMachineInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateStateMachineOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStateMachineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateStateMachineCommand(input, context);
    };
    UpdateStateMachineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateStateMachineCommand(output, context);
    };
    return UpdateStateMachineCommand;
}($Command));
export { UpdateStateMachineCommand };
//# sourceMappingURL=UpdateStateMachineCommand.js.map