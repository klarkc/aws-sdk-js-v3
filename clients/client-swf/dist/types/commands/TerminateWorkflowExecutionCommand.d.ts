import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { TerminateWorkflowExecutionInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TerminateWorkflowExecutionCommandInput extends TerminateWorkflowExecutionInput {
}
export interface TerminateWorkflowExecutionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the
 *       workflow execution identified by the given domain, runId, and workflowId. The child policy,
 *       registered with the workflow type or specified when starting this execution, is applied to any
 *       open child workflow executions of this workflow execution.</p>
 *
 *          <important>
 *             <p>If the identified workflow execution was in progress, it is terminated
 *         immediately.</p>
 *          </important>
 *
 *          <note>
 *             <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event
 *         is recorded in the history of the current open workflow with the matching workflowId in the
 *         domain.</p>
 *          </note>
 *
 *          <note>
 *             <p>You should consider using <a>RequestCancelWorkflowExecution</a> action
 *         instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p>
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
 * import { SWFClient, TerminateWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, TerminateWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new TerminateWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link TerminateWorkflowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TerminateWorkflowExecutionCommand extends $Command<TerminateWorkflowExecutionCommandInput, TerminateWorkflowExecutionCommandOutput, SWFClientResolvedConfig> {
    readonly input: TerminateWorkflowExecutionCommandInput;
    constructor(input: TerminateWorkflowExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateWorkflowExecutionCommandInput, TerminateWorkflowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
