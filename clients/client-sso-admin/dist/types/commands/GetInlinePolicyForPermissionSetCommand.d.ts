import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { GetInlinePolicyForPermissionSetRequest, GetInlinePolicyForPermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInlinePolicyForPermissionSetCommandInput extends GetInlinePolicyForPermissionSetRequest {
}
export interface GetInlinePolicyForPermissionSetCommandOutput extends GetInlinePolicyForPermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Obtains the inline policy assigned to the permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetInlinePolicyForPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetInlinePolicyForPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new GetInlinePolicyForPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInlinePolicyForPermissionSetCommandInput} for command's `input` shape.
 * @see {@link GetInlinePolicyForPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInlinePolicyForPermissionSetCommand extends $Command<GetInlinePolicyForPermissionSetCommandInput, GetInlinePolicyForPermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: GetInlinePolicyForPermissionSetCommandInput;
    constructor(input: GetInlinePolicyForPermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInlinePolicyForPermissionSetCommandInput, GetInlinePolicyForPermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
