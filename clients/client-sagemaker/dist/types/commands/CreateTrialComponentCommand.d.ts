import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrialComponentRequest, CreateTrialComponentResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTrialComponentCommandInput extends CreateTrialComponentRequest {
}
export interface CreateTrialComponentCommandOutput extends CreateTrialComponentResponse, __MetadataBearer {
}
/**
 * <p>Creates a <i>trial component</i>, which is a stage of a machine learning
 *         <i>trial</i>. A trial is composed of one or more trial components. A trial
 *       component can be used in multiple trials.</p>
 *          <p>Trial components include pre-processing jobs, training jobs, and batch transform
 *       jobs.</p>
 *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to a trial component and then use the <a>Search</a> API to
 *       search for the tags.</p>
 *          <note>
 *             <p>
 *                <code>CreateTrialComponent</code> can only be invoked from within an SageMaker managed
 *         environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
 *         notebooks. A call to <code>CreateTrialComponent</code> from outside one of these
 *         environments results in an error.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link CreateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTrialComponentCommand extends $Command<CreateTrialComponentCommandInput, CreateTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateTrialComponentCommandInput;
    constructor(input: CreateTrialComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrialComponentCommandInput, CreateTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
