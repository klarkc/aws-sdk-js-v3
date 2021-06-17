import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ListManagedPoliciesInPermissionSetRequest, ListManagedPoliciesInPermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListManagedPoliciesInPermissionSetCommandInput extends ListManagedPoliciesInPermissionSetRequest {
}
export interface ListManagedPoliciesInPermissionSetCommandOutput extends ListManagedPoliciesInPermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Lists the IAM managed policy that is attached to a specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListManagedPoliciesInPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedPoliciesInPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListManagedPoliciesInPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListManagedPoliciesInPermissionSetCommand extends $Command<ListManagedPoliciesInPermissionSetCommandInput, ListManagedPoliciesInPermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: ListManagedPoliciesInPermissionSetCommandInput;
    constructor(input: ListManagedPoliciesInPermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListManagedPoliciesInPermissionSetCommandInput, ListManagedPoliciesInPermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
