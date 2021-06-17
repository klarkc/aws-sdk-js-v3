import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";
import { DescribeLanguageModelRequest, DescribeLanguageModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLanguageModelCommandInput extends DescribeLanguageModelRequest {
}
export interface DescribeLanguageModelCommandOutput extends DescribeLanguageModelResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a single custom language model. Use this information to see
 *             details about the language model in your AWS account. You can also see whether the base
 *             language model used to create your custom language model has been updated. If Amazon Transcribe has
 *             updated the base model, you can create a new custom language model using the updated
 *             base model. If the language model wasn't created, you can use this operation to
 *             understand why Amazon Transcribe couldn't create it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, DescribeLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, DescribeLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const command = new DescribeLanguageModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLanguageModelCommandInput} for command's `input` shape.
 * @see {@link DescribeLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLanguageModelCommand extends $Command<DescribeLanguageModelCommandInput, DescribeLanguageModelCommandOutput, TranscribeClientResolvedConfig> {
    readonly input: DescribeLanguageModelCommandInput;
    constructor(input: DescribeLanguageModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranscribeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLanguageModelCommandInput, DescribeLanguageModelCommandOutput>;
    private serialize;
    private deserialize;
}
