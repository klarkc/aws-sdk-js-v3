import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DeleteAccountAssignmentRequest, DeleteAccountAssignmentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccountAssignmentCommandInput extends DeleteAccountAssignmentRequest {
}
export interface DeleteAccountAssignmentCommandOutput extends DeleteAccountAssignmentResponse, __MetadataBearer {
}
/**
 * <p>Deletes a principal's access from a specified AWS account using a specified permission
 *       set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DeleteAccountAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DeleteAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DeleteAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccountAssignmentCommand extends $Command<DeleteAccountAssignmentCommandInput, DeleteAccountAssignmentCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DeleteAccountAssignmentCommandInput;
    constructor(input: DeleteAccountAssignmentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccountAssignmentCommandInput, DeleteAccountAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
