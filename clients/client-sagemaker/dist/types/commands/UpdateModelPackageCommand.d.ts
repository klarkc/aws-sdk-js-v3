import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateModelPackageInput, UpdateModelPackageOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateModelPackageCommandInput extends UpdateModelPackageInput {
}
export interface UpdateModelPackageCommandOutput extends UpdateModelPackageOutput, __MetadataBearer {
}
/**
 * <p>Updates a versioned model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateModelPackageCommandInput} for command's `input` shape.
 * @see {@link UpdateModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateModelPackageCommand extends $Command<UpdateModelPackageCommandInput, UpdateModelPackageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateModelPackageCommandInput;
    constructor(input: UpdateModelPackageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateModelPackageCommandInput, UpdateModelPackageCommandOutput>;
    private serialize;
    private deserialize;
}
