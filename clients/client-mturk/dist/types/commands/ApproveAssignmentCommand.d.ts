import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ApproveAssignmentRequest, ApproveAssignmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ApproveAssignmentCommandInput extends ApproveAssignmentRequest {
}
export interface ApproveAssignmentCommandOutput extends ApproveAssignmentResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>ApproveAssignment</code> operation approves the results of a completed assignment.
 *         </p>
 *         <p>
 *             Approving an assignment initiates two payments from the Requester's Amazon.com account
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     The Worker who submitted the results is paid the reward specified in the HIT.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     Amazon Mechanical Turk fees are debited.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>
 *             If the Requester's account does not have adequate funds for these payments,
 *             the call to ApproveAssignment returns an exception, and the approval is not processed.
 *             You can include an optional feedback message with the approval,
 *             which the Worker can see in the Status section of the web site.
 *         </p>
 *         <p>
 *             You can also call this operation for assignments that were previous rejected
 *             and approve them by explicitly overriding the previous rejection.
 *             This only works on rejected assignments that were submitted within the previous 30 days
 *             and only if the assignment's related HIT has not been deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ApproveAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ApproveAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ApproveAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApproveAssignmentCommandInput} for command's `input` shape.
 * @see {@link ApproveAssignmentCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ApproveAssignmentCommand extends $Command<ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ApproveAssignmentCommandInput;
    constructor(input: ApproveAssignmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
