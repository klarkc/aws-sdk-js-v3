import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateEvaluationInput, CreateEvaluationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateEvaluationCommandInput extends CreateEvaluationInput {
}
export interface CreateEvaluationCommandOutput extends CreateEvaluationOutput, __MetadataBearer {
}
/**
 * <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code>
 *           for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a
 *             summary so that you know how effective the <code>MLModel</code> functions on the test
 *           data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>.
 *
 *         </p>
 *         <p>
 *             <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately
 *             returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use,
 *             Amazon ML sets the status to <code>COMPLETED</code>.
 *         </p>
 *         <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new CreateEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEvaluationCommandInput} for command's `input` shape.
 * @see {@link CreateEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateEvaluationCommand extends $Command<CreateEvaluationCommandInput, CreateEvaluationCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateEvaluationCommandInput;
    constructor(input: CreateEvaluationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEvaluationCommandInput, CreateEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
