import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateExperimentRequest, UpdateExperimentResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateExperimentCommandInput extends UpdateExperimentRequest {
}
export interface UpdateExperimentCommandOutput extends UpdateExperimentResponse, __MetadataBearer {
}
/**
 * <p>Adds, updates, or removes the description of an experiment. Updates the display name of an
 *       experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExperimentCommandInput} for command's `input` shape.
 * @see {@link UpdateExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateExperimentCommand extends $Command<UpdateExperimentCommandInput, UpdateExperimentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateExperimentCommandInput;
    constructor(input: UpdateExperimentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateExperimentCommandInput, UpdateExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
