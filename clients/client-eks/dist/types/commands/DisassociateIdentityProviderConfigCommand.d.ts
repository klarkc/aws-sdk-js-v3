import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DisassociateIdentityProviderConfigRequest, DisassociateIdentityProviderConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateIdentityProviderConfigCommandInput extends DisassociateIdentityProviderConfigRequest {
}
export interface DisassociateIdentityProviderConfigCommandOutput extends DisassociateIdentityProviderConfigResponse, __MetadataBearer {
}
/**
 * <p>Disassociates an identity provider configuration from a cluster. If you disassociate
 *             an identity provider from your cluster, users included in the provider can no longer
 *             access the cluster. However, you can still access the cluster with AWS IAM
 *             users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DisassociateIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DisassociateIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DisassociateIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link DisassociateIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateIdentityProviderConfigCommand extends $Command<DisassociateIdentityProviderConfigCommandInput, DisassociateIdentityProviderConfigCommandOutput, EKSClientResolvedConfig> {
    readonly input: DisassociateIdentityProviderConfigCommandInput;
    constructor(input: DisassociateIdentityProviderConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateIdentityProviderConfigCommandInput, DisassociateIdentityProviderConfigCommandOutput>;
    private serialize;
    private deserialize;
}
