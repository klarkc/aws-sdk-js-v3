import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelPackageGroupInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteModelPackageGroupCommandInput extends DeleteModelPackageGroupInput {
}
export interface DeleteModelPackageGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified model group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelPackageGroupCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelPackageGroupCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelPackageGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelPackageGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteModelPackageGroupCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteModelPackageGroupCommand extends $Command<DeleteModelPackageGroupCommandInput, DeleteModelPackageGroupCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteModelPackageGroupCommandInput;
    constructor(input: DeleteModelPackageGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelPackageGroupCommandInput, DeleteModelPackageGroupCommandOutput>;
    private serialize;
    private deserialize;
}
