import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListNotebookInstancesInput, ListNotebookInstancesOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNotebookInstancesCommandInput extends ListNotebookInstancesInput {
}
export interface ListNotebookInstancesCommandOutput extends ListNotebookInstancesOutput, __MetadataBearer {
}
/**
 * <p>Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS
 *             Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListNotebookInstancesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListNotebookInstancesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListNotebookInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookInstancesCommandInput} for command's `input` shape.
 * @see {@link ListNotebookInstancesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNotebookInstancesCommand extends $Command<ListNotebookInstancesCommandInput, ListNotebookInstancesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListNotebookInstancesCommandInput;
    constructor(input: ListNotebookInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNotebookInstancesCommandInput, ListNotebookInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
