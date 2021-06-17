import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteNotebookInstanceInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNotebookInstanceCommandInput extends DeleteNotebookInstanceInput {
}
export interface DeleteNotebookInstanceCommandOutput extends __MetadataBearer {
}
/**
 * <p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you
 *             must call the <code>StopNotebookInstance</code> API. </p>
 *         <important>
 *             <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes
 *                 the ML compute instance, and deletes the ML storage volume and the network interface
 *                 associated with the notebook instance. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNotebookInstanceCommand extends $Command<DeleteNotebookInstanceCommandInput, DeleteNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteNotebookInstanceCommandInput;
    constructor(input: DeleteNotebookInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNotebookInstanceCommandInput, DeleteNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
