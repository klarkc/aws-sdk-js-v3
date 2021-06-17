import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteIAMPolicyAssignmentRequest, DeleteIAMPolicyAssignmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteIAMPolicyAssignmentCommandInput extends DeleteIAMPolicyAssignmentRequest {
}
export interface DeleteIAMPolicyAssignmentCommandOutput extends DeleteIAMPolicyAssignmentResponse, __MetadataBearer {
}
/**
 * <p>Deletes an existing IAM policy assignment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteIAMPolicyAssignmentCommand extends $Command<DeleteIAMPolicyAssignmentCommandInput, DeleteIAMPolicyAssignmentCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: DeleteIAMPolicyAssignmentCommandInput;
    constructor(input: DeleteIAMPolicyAssignmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteIAMPolicyAssignmentCommandInput, DeleteIAMPolicyAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
