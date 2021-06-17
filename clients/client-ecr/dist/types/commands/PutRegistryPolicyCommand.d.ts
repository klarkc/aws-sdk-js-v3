import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { PutRegistryPolicyRequest, PutRegistryPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRegistryPolicyCommandInput extends PutRegistryPolicyRequest {
}
export interface PutRegistryPolicyCommandOutput extends PutRegistryPolicyResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates the permissions policy for your registry.</p>
 *         <p>A registry policy is used to specify permissions for another AWS account and is used
 *             when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, PutRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, PutRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new PutRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRegistryPolicyCommand extends $Command<PutRegistryPolicyCommandInput, PutRegistryPolicyCommandOutput, ECRClientResolvedConfig> {
    readonly input: PutRegistryPolicyCommandInput;
    constructor(input: PutRegistryPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRegistryPolicyCommandInput, PutRegistryPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
