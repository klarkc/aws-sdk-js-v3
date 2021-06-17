import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribePipelineRequest, DescribePipelineResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePipelineCommandInput extends DescribePipelineRequest {
}
export interface DescribePipelineCommandOutput extends DescribePipelineResponse, __MetadataBearer {
}
/**
 * <p>Describes the details of a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribePipelineCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribePipelineCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePipelineCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePipelineCommand extends $Command<DescribePipelineCommandInput, DescribePipelineCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribePipelineCommandInput;
    constructor(input: DescribePipelineCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePipelineCommandInput, DescribePipelineCommandOutput>;
    private serialize;
    private deserialize;
}
