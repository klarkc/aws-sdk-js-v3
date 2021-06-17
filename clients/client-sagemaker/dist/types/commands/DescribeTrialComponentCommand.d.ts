import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTrialComponentRequest, DescribeTrialComponentResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTrialComponentCommandInput extends DescribeTrialComponentRequest {
}
export interface DescribeTrialComponentCommandOutput extends DescribeTrialComponentResponse, __MetadataBearer {
}
/**
 * <p>Provides a list of a trials component's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTrialComponentCommand extends $Command<DescribeTrialComponentCommandInput, DescribeTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeTrialComponentCommandInput;
    constructor(input: DescribeTrialComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrialComponentCommandInput, DescribeTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
