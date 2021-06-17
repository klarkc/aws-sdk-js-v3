import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeArtifactRequest, DescribeArtifactResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeArtifactCommandInput extends DescribeArtifactRequest {
}
export interface DescribeArtifactCommandOutput extends DescribeArtifactResponse, __MetadataBearer {
}
/**
 * <p>Describes an artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeArtifactCommandInput} for command's `input` shape.
 * @see {@link DescribeArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeArtifactCommand extends $Command<DescribeArtifactCommandInput, DescribeArtifactCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeArtifactCommandInput;
    constructor(input: DescribeArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeArtifactCommandInput, DescribeArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
