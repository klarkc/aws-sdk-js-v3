import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DescribePermissionSetRequest, DescribePermissionSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePermissionSetCommandInput extends DescribePermissionSetRequest {
}
export interface DescribePermissionSetCommandOutput extends DescribePermissionSetResponse, __MetadataBearer {
}
/**
 * <p>Gets the details of the permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribePermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribePermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribePermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePermissionSetCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePermissionSetCommand extends $Command<DescribePermissionSetCommandInput, DescribePermissionSetCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DescribePermissionSetCommandInput;
    constructor(input: DescribePermissionSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePermissionSetCommandInput, DescribePermissionSetCommandOutput>;
    private serialize;
    private deserialize;
}
