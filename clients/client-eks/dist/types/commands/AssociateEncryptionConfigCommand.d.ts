import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { AssociateEncryptionConfigRequest, AssociateEncryptionConfigResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateEncryptionConfigCommandInput extends AssociateEncryptionConfigRequest {
}
export interface AssociateEncryptionConfigCommandOutput extends AssociateEncryptionConfigResponse, __MetadataBearer {
}
/**
 * <p>Associate encryption configuration to an existing cluster.</p>
 *         <p>You can use this API to enable encryption on existing clusters which do not have
 *             encryption already enabled. This allows you to implement a defense-in-depth security
 *             strategy without migrating applications to new EKS clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateEncryptionConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateEncryptionConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new AssociateEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateEncryptionConfigCommand extends $Command<AssociateEncryptionConfigCommandInput, AssociateEncryptionConfigCommandOutput, EKSClientResolvedConfig> {
    readonly input: AssociateEncryptionConfigCommandInput;
    constructor(input: AssociateEncryptionConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateEncryptionConfigCommandInput, AssociateEncryptionConfigCommandOutput>;
    private serialize;
    private deserialize;
}
