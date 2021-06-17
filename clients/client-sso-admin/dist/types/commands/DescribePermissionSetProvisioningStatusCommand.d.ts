import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DescribePermissionSetProvisioningStatusRequest, DescribePermissionSetProvisioningStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePermissionSetProvisioningStatusCommandInput extends DescribePermissionSetProvisioningStatusRequest {
}
export interface DescribePermissionSetProvisioningStatusCommandOutput extends DescribePermissionSetProvisioningStatusResponse, __MetadataBearer {
}
/**
 * <p>Describes the status for the given permission set provisioning request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribePermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePermissionSetProvisioningStatusCommand extends $Command<DescribePermissionSetProvisioningStatusCommandInput, DescribePermissionSetProvisioningStatusCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DescribePermissionSetProvisioningStatusCommandInput;
    constructor(input: DescribePermissionSetProvisioningStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePermissionSetProvisioningStatusCommandInput, DescribePermissionSetProvisioningStatusCommandOutput>;
    private serialize;
    private deserialize;
}
