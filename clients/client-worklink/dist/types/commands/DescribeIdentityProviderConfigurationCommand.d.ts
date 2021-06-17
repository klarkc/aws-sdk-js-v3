import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import { DescribeIdentityProviderConfigurationRequest, DescribeIdentityProviderConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeIdentityProviderConfigurationCommandInput extends DescribeIdentityProviderConfigurationRequest {
}
export interface DescribeIdentityProviderConfigurationCommandOutput extends DescribeIdentityProviderConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Describes the identity provider configuration of the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeIdentityProviderConfigurationCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeIdentityProviderConfigurationCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeIdentityProviderConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeIdentityProviderConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeIdentityProviderConfigurationCommand extends $Command<DescribeIdentityProviderConfigurationCommandInput, DescribeIdentityProviderConfigurationCommandOutput, WorkLinkClientResolvedConfig> {
    readonly input: DescribeIdentityProviderConfigurationCommandInput;
    constructor(input: DescribeIdentityProviderConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkLinkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeIdentityProviderConfigurationCommandInput, DescribeIdentityProviderConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
