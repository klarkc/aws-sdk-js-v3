import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { DescribeInstanceAccessControlAttributeConfigurationRequest, DescribeInstanceAccessControlAttributeConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstanceAccessControlAttributeConfigurationCommandInput extends DescribeInstanceAccessControlAttributeConfigurationRequest {
}
export interface DescribeInstanceAccessControlAttributeConfigurationCommandOutput extends DescribeInstanceAccessControlAttributeConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Returns the list of AWS SSO identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified AWS SSO instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>AWS SSO User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeInstanceAccessControlAttributeConfigurationCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeInstanceAccessControlAttributeConfigurationCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribeInstanceAccessControlAttributeConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceAccessControlAttributeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAccessControlAttributeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstanceAccessControlAttributeConfigurationCommand extends $Command<DescribeInstanceAccessControlAttributeConfigurationCommandInput, DescribeInstanceAccessControlAttributeConfigurationCommandOutput, SSOAdminClientResolvedConfig> {
    readonly input: DescribeInstanceAccessControlAttributeConfigurationCommandInput;
    constructor(input: DescribeInstanceAccessControlAttributeConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOAdminClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceAccessControlAttributeConfigurationCommandInput, DescribeInstanceAccessControlAttributeConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
