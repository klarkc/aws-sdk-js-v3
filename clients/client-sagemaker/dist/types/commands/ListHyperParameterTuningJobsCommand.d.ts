import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListHyperParameterTuningJobsRequest, ListHyperParameterTuningJobsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHyperParameterTuningJobsCommandInput extends ListHyperParameterTuningJobsRequest {
}
export interface ListHyperParameterTuningJobsCommandOutput extends ListHyperParameterTuningJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of <a>HyperParameterTuningJobSummary</a> objects that
 *             describe
 *             the hyperparameter tuning jobs launched in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHyperParameterTuningJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHyperParameterTuningJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListHyperParameterTuningJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHyperParameterTuningJobsCommandInput} for command's `input` shape.
 * @see {@link ListHyperParameterTuningJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHyperParameterTuningJobsCommand extends $Command<ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListHyperParameterTuningJobsCommandInput;
    constructor(input: ListHyperParameterTuningJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput>;
    private serialize;
    private deserialize;
}
