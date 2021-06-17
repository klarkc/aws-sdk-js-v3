import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { ProvisionPermissionSetRequest, ProvisionPermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ProvisionPermissionSetCommandInput extends ProvisionPermissionSetRequest {
}
export interface ProvisionPermissionSetCommandOutput extends ProvisionPermissionSetResponse, __MetadataBearer {
}
/**
 * <p>The process by which a specified permission set is provisioned to the specified target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ProvisionPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ProvisionPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ProvisionPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ProvisionPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ProvisionPermissionSetCommand extends $Command<ProvisionPermissionSetCommandInput, ProvisionPermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: ProvisionPermissionSetCommandInput;
    constructor(input: ProvisionPermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ProvisionPermissionSetCommandInput, ProvisionPermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
