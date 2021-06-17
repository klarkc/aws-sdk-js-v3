import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateArtifactRequest, CreateArtifactResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateArtifactCommandInput extends CreateArtifactRequest {
}
export interface CreateArtifactCommandOutput extends CreateArtifactResponse, __MetadataBearer {
}
/**
 * <p>Creates an <i>artifact</i>. An artifact is a lineage tracking entity that
 *         represents a URI addressable object or data. Some examples are the S3 URI of a dataset and
 *         the ECR registry path of an image. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 *          <note>
 *             <p>
 *                <code>CreateArtifact</code> can only be invoked from within an SageMaker managed
 *           environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
 *           notebooks. A call to <code>CreateArtifact</code> from outside one of these
 *           environments results in an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateArtifactCommandInput} for command's `input` shape.
 * @see {@link CreateArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateArtifactCommand extends $Command<CreateArtifactCommandInput, CreateArtifactCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateArtifactCommandInput;
    constructor(input: CreateArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateArtifactCommandInput, CreateArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
