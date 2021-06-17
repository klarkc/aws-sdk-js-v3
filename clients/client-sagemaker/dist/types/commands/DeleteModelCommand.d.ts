import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteModelInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteModelCommandInput extends DeleteModelInput {
}
export interface DeleteModelCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that
 *             was created in Amazon SageMaker when you called the <a>CreateModel</a> API. It does not
 *             delete model artifacts, inference code, or the IAM role that you specified when
 *             creating the model. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteModelCommandInput} for command's `input` shape.
 * @see {@link DeleteModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteModelCommand extends $Command<DeleteModelCommandInput, DeleteModelCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteModelCommandInput;
    constructor(input: DeleteModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteModelCommandInput, DeleteModelCommandOutput>;
    private serialize;
    private deserialize;
}
