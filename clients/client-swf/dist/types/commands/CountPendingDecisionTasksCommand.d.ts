import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { CountPendingDecisionTasksInput, PendingTaskCount } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CountPendingDecisionTasksCommandInput extends CountPendingDecisionTasksInput {
}
export interface CountPendingDecisionTasksCommandOutput extends PendingTaskCount, __MetadataBearer {
}
/**
 * <p>Returns the estimated number of decision tasks in the specified task list. The count
 *       returned is an approximation and isn't guaranteed to be exact. If you specify a task list that
 *       no decision task was ever scheduled in then <code>0</code> is returned.</p>
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
 * import { SWFClient, CountPendingDecisionTasksCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, CountPendingDecisionTasksCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new CountPendingDecisionTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CountPendingDecisionTasksCommandInput} for command's `input` shape.
 * @see {@link CountPendingDecisionTasksCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CountPendingDecisionTasksCommand extends $Command<CountPendingDecisionTasksCommandInput, CountPendingDecisionTasksCommandOutput, SWFClientResolvedConfig> {
    readonly input: CountPendingDecisionTasksCommandInput;
    constructor(input: CountPendingDecisionTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CountPendingDecisionTasksCommandInput, CountPendingDecisionTasksCommandOutput>;
    private serialize;
    private deserialize;
}
