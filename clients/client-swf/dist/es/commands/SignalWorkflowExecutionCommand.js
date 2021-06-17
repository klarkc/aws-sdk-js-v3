import { __extends } from "tslib";
import { SignalWorkflowExecutionInput } from "../models/models_0";
import { deserializeAws_json1_0SignalWorkflowExecutionCommand, serializeAws_json1_0SignalWorkflowExecutionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution
 *       history and creates a decision task for the workflow execution identified by the given domain,
 *       workflowId and runId. The event is recorded with the specified user defined signalName and
 *       input (if provided).</p>
 *
 *          <note>
 *             <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is
 *         recorded in the history of the current open workflow with the matching workflowId in the
 *         domain.</p>
 *          </note>
 *
 *          <note>
 *             <p>If the specified workflow execution isn't open, this method fails with
 *           <code>UnknownResource</code>.</p>
 *          </note>
 *
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, SignalWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, SignalWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new SignalWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignalWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link SignalWorkflowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SignalWorkflowExecutionCommand = /** @class */ (function (_super) {
    __extends(SignalWorkflowExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SignalWorkflowExecutionCommand(input) {
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
    SignalWorkflowExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SWFClient";
        var commandName = "SignalWorkflowExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SignalWorkflowExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SignalWorkflowExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0SignalWorkflowExecutionCommand(input, context);
    };
    SignalWorkflowExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0SignalWorkflowExecutionCommand(output, context);
    };
    return SignalWorkflowExecutionCommand;
}($Command));
export { SignalWorkflowExecutionCommand };
//# sourceMappingURL=SignalWorkflowExecutionCommand.js.map