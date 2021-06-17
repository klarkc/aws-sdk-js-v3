import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StartNotebookInstanceInput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartNotebookInstanceCommandInput extends StartNotebookInstanceInput {
}
export interface StartNotebookInstanceCommandOutput extends __MetadataBearer {
}
/**
 * <p>Launches an ML compute instance with the latest version of the libraries and
 *             attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the
 *             notebook instance status to <code>InService</code>. A notebook instance's status must be
 *                 <code>InService</code> before you can connect to your Jupyter notebook. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StartNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link StartNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartNotebookInstanceCommand extends $Command<StartNotebookInstanceCommandInput, StartNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StartNotebookInstanceCommandInput;
    constructor(input: StartNotebookInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartNotebookInstanceCommandInput, StartNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
