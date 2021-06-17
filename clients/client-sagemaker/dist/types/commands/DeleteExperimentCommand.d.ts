import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteExperimentRequest, DeleteExperimentResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteExperimentCommandInput extends DeleteExperimentRequest {
}
export interface DeleteExperimentCommandOutput extends DeleteExperimentResponse, __MetadataBearer {
}
/**
 * <p>Deletes an SageMaker experiment. All trials associated with the experiment must be deleted
 *       first. Use the <a>ListTrials</a> API to get a list of the trials associated with
 *       the experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExperimentCommandInput} for command's `input` shape.
 * @see {@link DeleteExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteExperimentCommand extends $Command<DeleteExperimentCommandInput, DeleteExperimentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteExperimentCommandInput;
    constructor(input: DeleteExperimentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteExperimentCommandInput, DeleteExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
