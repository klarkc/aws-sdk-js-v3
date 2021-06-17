import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { RespondActivityTaskFailedInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RespondActivityTaskFailedCommandInput extends RespondActivityTaskFailedInput {
}
export interface RespondActivityTaskFailedCommandOutput extends __MetadataBearer {
}
/**
 * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified
 *       by the <code>taskToken</code> has failed with <code>reason</code> (if specified). The
 *         <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code>
 *       event added to the workflow history.</p>
 *
 *          <p>A task is considered open from the time that it is scheduled until it is closed.
 *       Therefore a task is reported as open while a worker is processing it. A task is closed after
 *       it has been specified in a call to <a>RespondActivityTaskCompleted</a>, <a>RespondActivityTaskCanceled</a>, RespondActivityTaskFailed, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed
 *         out</a>.</p>
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
 * import { SWFClient, RespondActivityTaskFailedCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RespondActivityTaskFailedCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const command = new RespondActivityTaskFailedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RespondActivityTaskFailedCommandInput} for command's `input` shape.
 * @see {@link RespondActivityTaskFailedCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RespondActivityTaskFailedCommand extends $Command<RespondActivityTaskFailedCommandInput, RespondActivityTaskFailedCommandOutput, SWFClientResolvedConfig> {
    readonly input: RespondActivityTaskFailedCommandInput;
    constructor(input: RespondActivityTaskFailedCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RespondActivityTaskFailedCommandInput, RespondActivityTaskFailedCommandOutput>;
    private serialize;
    private deserialize;
}
