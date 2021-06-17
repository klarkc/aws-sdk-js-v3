import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateEvaluationInput, UpdateEvaluationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateEvaluationCommandInput extends UpdateEvaluationInput {
}
export interface UpdateEvaluationCommandOutput extends UpdateEvaluationOutput, __MetadataBearer {
}
/**
 * <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p>
 *         <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new UpdateEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEvaluationCommandInput} for command's `input` shape.
 * @see {@link UpdateEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateEvaluationCommand extends $Command<UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: UpdateEvaluationCommandInput;
    constructor(input: UpdateEvaluationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
