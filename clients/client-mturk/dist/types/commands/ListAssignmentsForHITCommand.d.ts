import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListAssignmentsForHITRequest, ListAssignmentsForHITResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssignmentsForHITCommandInput extends ListAssignmentsForHITRequest {
}
export interface ListAssignmentsForHITCommandOutput extends ListAssignmentsForHITResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>ListAssignmentsForHIT</code>
 *             operation retrieves completed assignments for a HIT. You can use this
 *             operation to retrieve the results for a HIT.
 *         </p>
 *         <p> You can get assignments for a HIT at any time, even if the
 *             HIT is not yet Reviewable. If a HIT requested multiple assignments,
 *             and has received some results but has not yet become Reviewable, you
 *             can still retrieve the partial results with this operation.
 *         </p>
 *         <p> Use the AssignmentStatus parameter to control which set of
 *             assignments for a HIT are returned. The ListAssignmentsForHIT
 *             operation
 *             can return submitted assignments awaiting approval, or it can return
 *             assignments that have already been approved or rejected. You can set
 *             AssignmentStatus=Approved,Rejected to get assignments that have
 *             already been approved and rejected together in one result set.
 *         </p>
 *         <p> Only the Requester who created the HIT can retrieve the
 *             assignments for that HIT.
 *         </p>
 *         <p> Results are sorted and divided into numbered pages and the
 *             operation returns a single page of results. You can use the
 *             parameters
 *             of the operation to control sorting and pagination.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListAssignmentsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListAssignmentsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListAssignmentsForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssignmentsForHITCommandInput} for command's `input` shape.
 * @see {@link ListAssignmentsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssignmentsForHITCommand extends $Command<ListAssignmentsForHITCommandInput, ListAssignmentsForHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListAssignmentsForHITCommandInput;
    constructor(input: ListAssignmentsForHITCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssignmentsForHITCommandInput, ListAssignmentsForHITCommandOutput>;
    private serialize;
    private deserialize;
}
