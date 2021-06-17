import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelPackageGroupPolicyInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteModelPackageGroupPolicyCommandInput extends DeleteModelPackageGroupPolicyInput {
}
export interface DeleteModelPackageGroupPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a model group resource policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelPackageGroupPolicyCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelPackageGroupPolicyCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelPackageGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelPackageGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteModelPackageGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteModelPackageGroupPolicyCommand extends $Command<DeleteModelPackageGroupPolicyCommandInput, DeleteModelPackageGroupPolicyCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteModelPackageGroupPolicyCommandInput;
    constructor(input: DeleteModelPackageGroupPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelPackageGroupPolicyCommandInput, DeleteModelPackageGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
