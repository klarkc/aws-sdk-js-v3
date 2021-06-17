import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateIAMPolicyAssignmentRequest, UpdateIAMPolicyAssignmentResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateIAMPolicyAssignmentCommandInput extends UpdateIAMPolicyAssignmentRequest {
}
export interface UpdateIAMPolicyAssignmentCommandOutput extends UpdateIAMPolicyAssignmentResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing IAM policy assignment. This operation updates only the optional
 * 			parameter or parameters that are specified in the request.
 * 		    This overwrites all of the users included in <code>Identities</code>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new UpdateIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link UpdateIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateIAMPolicyAssignmentCommand extends $Command<UpdateIAMPolicyAssignmentCommandInput, UpdateIAMPolicyAssignmentCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: UpdateIAMPolicyAssignmentCommandInput;
    constructor(input: UpdateIAMPolicyAssignmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateIAMPolicyAssignmentCommandInput, UpdateIAMPolicyAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
