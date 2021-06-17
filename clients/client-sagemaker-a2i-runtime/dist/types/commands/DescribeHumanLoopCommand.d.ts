import { SageMakerA2IRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerA2IRuntimeClient";
import { DescribeHumanLoopRequest, DescribeHumanLoopResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHumanLoopCommandInput extends DescribeHumanLoopRequest {
}
export interface DescribeHumanLoopCommandOutput extends DescribeHumanLoopResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the specified human loop. If the human loop was deleted, this
 *       operation will return a <code>ResourceNotFoundException</code> error. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, DescribeHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new DescribeHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DescribeHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHumanLoopCommand extends $Command<DescribeHumanLoopCommandInput, DescribeHumanLoopCommandOutput, SageMakerA2IRuntimeClientResolvedConfig> {
    readonly input: DescribeHumanLoopCommandInput;
    constructor(input: DescribeHumanLoopCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerA2IRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHumanLoopCommandInput, DescribeHumanLoopCommandOutput>;
    private serialize;
    private deserialize;
}
