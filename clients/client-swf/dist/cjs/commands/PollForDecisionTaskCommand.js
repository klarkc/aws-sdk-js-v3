"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollForDecisionTaskCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class PollForDecisionTaskCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SWFClient";
        const commandName = "PollForDecisionTaskCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PollForDecisionTaskInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DecisionTask.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0PollForDecisionTaskCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0PollForDecisionTaskCommand(output, context);
    }
}
exports.PollForDecisionTaskCommand = PollForDecisionTaskCommand;
//# sourceMappingURL=PollForDecisionTaskCommand.js.map