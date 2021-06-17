import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateExperimentRequest, CreateExperimentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateExperimentCommandInput extends CreateExperimentRequest {
}
export interface CreateExperimentCommandOutput extends CreateExperimentResponse, __MetadataBearer {
}
/**
 * <p>Creates an SageMaker <i>experiment</i>. An experiment is a collection of
 *         <i>trials</i> that are observed, compared and evaluated as a group. A trial is
 *       a set of steps, called <i>trial components</i>, that produce a machine learning
 *       model.</p>
 *          <p>The goal of an experiment is to determine the components that produce the best model.
 *       Multiple trials are performed, each one isolating and measuring the impact of a change to one
 *       or more inputs, while keeping the remaining inputs constant.</p>
 *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to experiments, trials, trial components and then use the <a>Search</a> API to search for the tags.</p>
 *          <p>To add a description to an experiment, specify the optional <code>Description</code>
 *       parameter. To add a description later, or to change the description, call the <a>UpdateExperiment</a> API.</p>
 *          <p>To get a list of all your experiments, call the <a>ListExperiments</a> API. To
 *       view an experiment's properties, call the <a>DescribeExperiment</a> API. To get a
 *       list of all the trials associated with an experiment, call the <a>ListTrials</a>
 *       API. To create a trial call the <a>CreateTrial</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateExperimentCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateExperimentCommand extends $Command<CreateExperimentCommandInput, CreateExperimentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateExperimentCommandInput;
    constructor(input: CreateExperimentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateExperimentCommandInput, CreateExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
