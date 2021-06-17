import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelPackageInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteModelPackageCommandInput extends DeleteModelPackageInput {
}
export interface DeleteModelPackageCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a model package.</p>
 *         <p>A model package is used to create Amazon SageMaker models or list on AWS Marketplace. Buyers can
 *             subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelPackageCommandInput} for command's `input` shape.
 * @see {@link DeleteModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteModelPackageCommand extends $Command<DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteModelPackageCommandInput;
    constructor(input: DeleteModelPackageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput>;
    private serialize;
    private deserialize;
}
