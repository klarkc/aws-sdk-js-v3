import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeCodeRepositoryInput, DescribeCodeRepositoryOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCodeRepositoryCommandInput extends DescribeCodeRepositoryInput {
}
export interface DescribeCodeRepositoryCommandOutput extends DescribeCodeRepositoryOutput, __MetadataBearer {
}
/**
 * <p>Gets details about the specified Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCodeRepositoryCommand extends $Command<DescribeCodeRepositoryCommandInput, DescribeCodeRepositoryCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeCodeRepositoryCommandInput;
    constructor(input: DescribeCodeRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCodeRepositoryCommandInput, DescribeCodeRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
