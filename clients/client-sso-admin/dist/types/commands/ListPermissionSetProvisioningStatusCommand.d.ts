import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ListPermissionSetProvisioningStatusRequest, ListPermissionSetProvisioningStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPermissionSetProvisioningStatusCommandInput extends ListPermissionSetProvisioningStatusRequest {
}
export interface ListPermissionSetProvisioningStatusCommandOutput extends ListPermissionSetProvisioningStatusResponse, __MetadataBearer {
}
/**
 * <p>Lists the status of the permission set provisioning requests for a specified SSO
 *       instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListPermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPermissionSetProvisioningStatusCommand extends $Command<ListPermissionSetProvisioningStatusCommandInput, ListPermissionSetProvisioningStatusCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: ListPermissionSetProvisioningStatusCommandInput;
    constructor(input: ListPermissionSetProvisioningStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPermissionSetProvisioningStatusCommandInput, ListPermissionSetProvisioningStatusCommandOutput>;
    private serialize;
    private deserialize;
}
