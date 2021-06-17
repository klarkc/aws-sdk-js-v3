import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeExperimentRequest, DescribeExperimentResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeExperimentCommandInput extends DescribeExperimentRequest {
}
export interface DescribeExperimentCommandOutput extends DescribeExperimentResponse, __MetadataBearer {
}
/**
 * <p>Provides a list of an experiment's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExperimentCommandInput} for command's `input` shape.
 * @see {@link DescribeExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeExperimentCommand extends $Command<DescribeExperimentCommandInput, DescribeExperimentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeExperimentCommandInput;
    constructor(input: DescribeExperimentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExperimentCommandInput, DescribeExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
