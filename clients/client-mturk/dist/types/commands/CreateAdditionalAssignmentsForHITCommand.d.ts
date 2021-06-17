import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateAdditionalAssignmentsForHITRequest, CreateAdditionalAssignmentsForHITResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAdditionalAssignmentsForHITCommandInput extends CreateAdditionalAssignmentsForHITRequest {
}
export interface CreateAdditionalAssignmentsForHITCommandOutput extends CreateAdditionalAssignmentsForHITResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>CreateAdditionalAssignmentsForHIT</code>
 *             operation increases the maximum number of assignments of an existing HIT.
 *         </p>
 *         <p>
 *             To extend the maximum number of assignments, specify the number of additional assignments.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more
 *                         assignments will result in an
 *                         <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code>
 *                         exception.</p>
 *                 </li>
 *                <li>
 *                     <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an
 *                         <code>AWS.MechanicalTurk.HITTooOldForExtension</code>
 *                         exception.
 *                     </p>
 *                 </li>
 *             </ul>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateAdditionalAssignmentsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateAdditionalAssignmentsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateAdditionalAssignmentsForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAdditionalAssignmentsForHITCommandInput} for command's `input` shape.
 * @see {@link CreateAdditionalAssignmentsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAdditionalAssignmentsForHITCommand extends $Command<CreateAdditionalAssignmentsForHITCommandInput, CreateAdditionalAssignmentsForHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateAdditionalAssignmentsForHITCommandInput;
    constructor(input: CreateAdditionalAssignmentsForHITCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAdditionalAssignmentsForHITCommandInput, CreateAdditionalAssignmentsForHITCommandOutput>;
    private serialize;
    private deserialize;
}
