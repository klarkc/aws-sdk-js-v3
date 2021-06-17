import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { PutModelPackageGroupPolicyInput, PutModelPackageGroupPolicyOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutModelPackageGroupPolicyCommandInput extends PutModelPackageGroupPolicyInput {
}
export interface PutModelPackageGroupPolicyCommandOutput extends PutModelPackageGroupPolicyOutput, __MetadataBearer {
}
/**
 * <p>Adds a resouce policy to control access to a model group. For information about
 *             resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based
 *                 policies and resource-based policies</a> in the <i>AWS Identity and Access Management User Guide.</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, PutModelPackageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, PutModelPackageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new PutModelPackageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutModelPackageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutModelPackageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutModelPackageGroupPolicyCommand extends $Command<PutModelPackageGroupPolicyCommandInput, PutModelPackageGroupPolicyCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: PutModelPackageGroupPolicyCommandInput;
    constructor(input: PutModelPackageGroupPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutModelPackageGroupPolicyCommandInput, PutModelPackageGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
