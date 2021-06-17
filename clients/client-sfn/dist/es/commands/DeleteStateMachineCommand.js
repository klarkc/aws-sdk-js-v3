import { __extends } from "tslib";
import { DeleteStateMachineInput, DeleteStateMachineOutput } from "../models/models_0";
import { deserializeAws_json1_0DeleteStateMachineCommand, serializeAws_json1_0DeleteStateMachineCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's
 *       status to <code>DELETING</code> and begins the deletion process. </p>
 *          <note>
 *             <p>For <code>EXPRESS</code>state machines, the deletion will happen eventually (usually
 *         less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code>
 *         API is called.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DeleteStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DeleteStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DeleteStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStateMachineCommandInput} for command's `input` shape.
 * @see {@link DeleteStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStateMachineCommand = /** @class */ (function (_super) {
    __extends(DeleteStateMachineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStateMachineCommand(input) {
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
    DeleteStateMachineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SFNClient";
        var commandName = "DeleteStateMachineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStateMachineInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStateMachineOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStateMachineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteStateMachineCommand(input, context);
    };
    DeleteStateMachineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteStateMachineCommand(output, context);
    };
    return DeleteStateMachineCommand;
}($Command));
export { DeleteStateMachineCommand };
//# sourceMappingURL=DeleteStateMachineCommand.js.map