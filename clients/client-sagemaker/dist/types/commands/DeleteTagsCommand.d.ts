import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteTagsInput, DeleteTagsOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTagsCommandInput extends DeleteTagsInput {
}
export interface DeleteTagsCommandOutput extends DeleteTagsOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified tags from an Amazon SageMaker resource.</p>
 *         <p>To list a resource's tags, use the <code>ListTags</code> API. </p>
 *         <note>
 *             <p>When you call this API to delete tags from a hyperparameter tuning job, the
 *                 deleted tags are not removed from training jobs that the hyperparameter tuning job
 *                 launched before you called this API.</p>
 *         </note>
 *         <note>
 *             <p>When you call this API to delete tags from a SageMaker Studio Domain or User Profile, the
 *                 deleted tags are not removed from Apps that the SageMaker Studio Domain or User Profile
 *                 launched before you called this API.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTagsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTagsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTagsCommandInput} for command's `input` shape.
 * @see {@link DeleteTagsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTagsCommand extends $Command<DeleteTagsCommandInput, DeleteTagsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteTagsCommandInput;
    constructor(input: DeleteTagsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagsCommandInput, DeleteTagsCommandOutput>;
    private serialize;
    private deserialize;
}
