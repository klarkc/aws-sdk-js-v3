import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrialRequest, CreateTrialResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTrialCommandInput extends CreateTrialRequest {
}
export interface CreateTrialCommandOutput extends CreateTrialResponse, __MetadataBearer {
}
/**
 * <p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called
 *         <i>trial components</i> that produce a machine learning model. A trial is part
 *       of a single SageMaker <i>experiment</i>.</p>
 *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to a trial and then use the <a>Search</a> API to search for
 *       the tags.</p>
 *          <p>To get a list of all your trials, call the <a>ListTrials</a> API. To view a
 *       trial's properties, call the <a>DescribeTrial</a> API. To create a trial component,
 *       call the <a>CreateTrialComponent</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTrialCommandInput} for command's `input` shape.
 * @see {@link CreateTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTrialCommand extends $Command<CreateTrialCommandInput, CreateTrialCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateTrialCommandInput;
    constructor(input: CreateTrialCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrialCommandInput, CreateTrialCommandOutput>;
    private serialize;
    private deserialize;
}
