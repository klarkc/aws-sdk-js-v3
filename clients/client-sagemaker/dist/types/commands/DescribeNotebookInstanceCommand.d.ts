import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeNotebookInstanceInput, DescribeNotebookInstanceOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNotebookInstanceCommandInput extends DescribeNotebookInstanceInput {
}
export interface DescribeNotebookInstanceCommandOutput extends DescribeNotebookInstanceOutput, __MetadataBearer {
}
/**
 * <p>Returns information about a notebook instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNotebookInstanceCommand extends $Command<DescribeNotebookInstanceCommandInput, DescribeNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeNotebookInstanceCommandInput;
    constructor(input: DescribeNotebookInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNotebookInstanceCommandInput, DescribeNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
