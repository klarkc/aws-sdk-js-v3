import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ListAccountAssignmentsRequest, ListAccountAssignmentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAccountAssignmentsCommandInput extends ListAccountAssignmentsRequest {
}
export interface ListAccountAssignmentsCommandOutput extends ListAccountAssignmentsResponse, __MetadataBearer {
}
/**
 * <p>Lists the assignee of the specified AWS account with the specified permission
 *        set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListAccountAssignmentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountAssignmentsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentsCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccountAssignmentsCommand extends $Command<ListAccountAssignmentsCommandInput, ListAccountAssignmentsCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: ListAccountAssignmentsCommandInput;
    constructor(input: ListAccountAssignmentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountAssignmentsCommandInput, ListAccountAssignmentsCommandOutput>;
    private serialize;
    private deserialize;
}
