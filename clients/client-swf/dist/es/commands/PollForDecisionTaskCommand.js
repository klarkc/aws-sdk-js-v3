import { __extends } from "tslib";
import { DecisionTask, PollForDecisionTaskInput } from "../models/models_0";
import { deserializeAws_json1_0PollForDecisionTaskCommand, serializeAws_json1_0PollForDecisionTaskCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Used by deciders to get a <a>DecisionTask</a> from the specified decision
 *         <code>taskList</code>. A decision task may be returned for any open workflow execution that
 *       is using the specified task list. The task includes a paginated view of the history of the
 *       workflow execution. The decider should use the workflow type and the history to determine how
 *       to properly handle the task.</p>
 *          <p>This action initiates a long poll, where the service holds the HTTP connection open and
 *       responds as soon a task becomes available. If no decision task is available in the specified
 *       task list before the timeout of 60 seconds expires, an empty result is returned. An empty
 *       result, in this context, means that a DecisionTask is returned, but that the value of
 *       taskToken is an empty string.</p>
 *          <important>
 *             <p>Deciders should set their client side socket timeout to at least 70 seconds (10
 *         seconds higher than the timeout).</p>
 *          </important>
 *          <important>
 *             <p>Because the number of workflow history events for a single workflow execution might
 *         be very large, the result returned might be split up across a number of pages. To retrieve
 *         subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the
 *           <code>nextPageToken</code> returned by the initial call. Note that you do
 *           <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this
 *           <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code>
 *         again.</p>
 *          </important>
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
 *                <p>Constrain the <code>taskList.name</code> parameter by using a
 *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
 *           action to access only certain task lists.</p>
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
 * import { SWFClient, PollForDecisionTaskCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, PollForDecisionTaskCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new PollForDecisionTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PollForDecisionTaskCommandInput} for command's `input` shape.
 * @see {@link PollForDecisionTaskCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PollForDecisionTaskCommand = /** @class */ (function (_super) {
    __extends(PollForDecisionTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PollForDecisionTaskCommand(input) {
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
    PollForDecisionTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SWFClient";
        var commandName = "PollForDecisionTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PollForDecisionTaskInput.filterSensitiveLog,
            outputFilterSensitiveLog: DecisionTask.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PollForDecisionTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0PollForDecisionTaskCommand(input, context);
    };
    PollForDecisionTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0PollForDecisionTaskCommand(output, context);
    };
    return PollForDecisionTaskCommand;
}($Command));
export { PollForDecisionTaskCommand };
//# sourceMappingURL=PollForDecisionTaskCommand.js.map