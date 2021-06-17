import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ListAccountsForProvisionedPermissionSetRequest, ListAccountsForProvisionedPermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAccountsForProvisionedPermissionSetCommandInput extends ListAccountsForProvisionedPermissionSetRequest {
}
export interface ListAccountsForProvisionedPermissionSetCommandOutput extends ListAccountsForProvisionedPermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Lists all the AWS accounts where the specified permission set is provisioned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountsForProvisionedPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountsForProvisionedPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListAccountsForProvisionedPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccountsForProvisionedPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListAccountsForProvisionedPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAccountsForProvisionedPermissionSetCommand extends $Command<ListAccountsForProvisionedPermissionSetCommandInput, ListAccountsForProvisionedPermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: ListAccountsForProvisionedPermissionSetCommandInput;
    constructor(input: ListAccountsForProvisionedPermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountsForProvisionedPermissionSetCommandInput, ListAccountsForProvisionedPermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
