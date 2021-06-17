import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListIAMPolicyAssignmentsRequest, ListIAMPolicyAssignmentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIAMPolicyAssignmentsCommandInput extends ListIAMPolicyAssignmentsRequest {
}
export interface ListIAMPolicyAssignmentsCommandOutput extends ListIAMPolicyAssignmentsResponse, __MetadataBearer {
}
/**
 * <p>Lists IAM policy assignments in the current Amazon QuickSight account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIAMPolicyAssignmentsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIAMPolicyAssignmentsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListIAMPolicyAssignmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIAMPolicyAssignmentsCommandInput} for command's `input` shape.
 * @see {@link ListIAMPolicyAssignmentsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIAMPolicyAssignmentsCommand extends $Command<ListIAMPolicyAssignmentsCommandInput, ListIAMPolicyAssignmentsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListIAMPolicyAssignmentsCommandInput;
    constructor(input: ListIAMPolicyAssignmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIAMPolicyAssignmentsCommandInput, ListIAMPolicyAssignmentsCommandOutput>;
    private serialize;
    private deserialize;
}
