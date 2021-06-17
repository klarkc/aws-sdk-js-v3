import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTrialRequest, DescribeTrialResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeTrialCommandInput extends DescribeTrialRequest {
}
export interface DescribeTrialCommandOutput extends DescribeTrialResponse, __MetadataBearer {
}
/**
 * <p>Provides a list of a trial's properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrialCommandInput} for command's `input` shape.
 * @see {@link DescribeTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeTrialCommand extends $Command<DescribeTrialCommandInput, DescribeTrialCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeTrialCommandInput;
    constructor(input: DescribeTrialCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrialCommandInput, DescribeTrialCommandOutput>;
    private serialize;
    private deserialize;
}
