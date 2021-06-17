import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeIdentityProviderConfigRequest, DescribeIdentityProviderConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIdentityProviderConfigCommandInput extends DescribeIdentityProviderConfigRequest {
}
export interface DescribeIdentityProviderConfigCommandOutput extends DescribeIdentityProviderConfigResponse, __MetadataBearer {
}
/**
 * <p>Returns descriptive information about an identity provider configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIdentityProviderConfigCommand extends $Command<DescribeIdentityProviderConfigCommandInput, DescribeIdentityProviderConfigCommandOutput, EKSClientResolvedConfig> {
    readonly input: DescribeIdentityProviderConfigCommandInput;
    constructor(input: DescribeIdentityProviderConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityProviderConfigCommandInput, DescribeIdentityProviderConfigCommandOutput>;
    private serialize;
    private deserialize;
}
