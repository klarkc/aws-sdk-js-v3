import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeHyperParameterTuningJobRequest, DescribeHyperParameterTuningJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHyperParameterTuningJobCommandInput extends DescribeHyperParameterTuningJobRequest {
}
export interface DescribeHyperParameterTuningJobCommandOutput extends DescribeHyperParameterTuningJobResponse, __MetadataBearer {
}
/**
 * <p>Gets
 *             a description of a hyperparameter tuning job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link DescribeHyperParameterTuningJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHyperParameterTuningJobCommand extends $Command<DescribeHyperParameterTuningJobCommandInput, DescribeHyperParameterTuningJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeHyperParameterTuningJobCommandInput;
    constructor(input: DescribeHyperParameterTuningJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHyperParameterTuningJobCommandInput, DescribeHyperParameterTuningJobCommandOutput>;
    private serialize;
    private deserialize;
}
