import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateContextRequest, CreateContextResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateContextCommandInput extends CreateContextRequest {
}
export interface CreateContextCommandOutput extends CreateContextResponse, __MetadataBearer {
}
/**
 * <p>Creates a <i>context</i>. A context is a lineage tracking entity that
 *         represents a logical grouping of other tracking or experiment entities. Some examples are
 *         an endpoint and a model package. For more information, see
 *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
 *           ML Lineage Tracking</a>.</p>
 *          <note>
 *             <p>
 *                <code>CreateContext</code> can only be invoked from within an SageMaker managed
 *           environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
 *           notebooks. A call to <code>CreateContext</code> from outside one of these
 *           environments results in an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateContextCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateContextCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateContextCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContextCommandInput} for command's `input` shape.
 * @see {@link CreateContextCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateContextCommand extends $Command<CreateContextCommandInput, CreateContextCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateContextCommandInput;
    constructor(input: CreateContextCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateContextCommandInput, CreateContextCommandOutput>;
    private serialize;
    private deserialize;
}
