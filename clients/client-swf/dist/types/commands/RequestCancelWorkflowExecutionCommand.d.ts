import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RequestCancelWorkflowExecutionInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RequestCancelWorkflowExecutionCommandInput extends RequestCancelWorkflowExecutionInput {
}
export interface RequestCancelWorkflowExecutionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running
 *       workflow execution identified by the given domain, workflowId, and runId. This logically
 *       requests the cancellation of the workflow execution as a whole. It is up to the decider to
 *       take appropriate actions when it receives an execution history with this event.</p>
 *
 *          <note>
 *             <p>If the runId isn't specified, the <code>WorkflowExecutionCancelRequested</code> event
 *         is recorded in the history of the current open workflow execution with the specified
 *         workflowId in the domain.</p>
 *          </note>
 *
 *          <note>
 *             <p>Because this action allows the workflow to properly clean up and gracefully close, it
 *         should be used instead of <a>TerminateWorkflowExecution</a> when
 *         possible.</p>
 *          </note>
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
 * import { SWFClient, RequestCancelWorkflowExecutionCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RequestCancelWorkflowExecutionCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new RequestCancelWorkflowExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestCancelWorkflowExecutionCommandInput} for command's `input` shape.
 * @see {@link RequestCancelWorkflowExecutionCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RequestCancelWorkflowExecutionCommand extends $Command<RequestCancelWorkflowExecutionCommandInput, RequestCancelWorkflowExecutionCommandOutput, SWFClientResolvedConfig> {
    readonly input: RequestCancelWorkflowExecutionCommandInput;
    constructor(input: RequestCancelWorkflowExecutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RequestCancelWorkflowExecutionCommandInput, RequestCancelWorkflowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
