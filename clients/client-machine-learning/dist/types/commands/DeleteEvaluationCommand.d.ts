import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteEvaluationInput, DeleteEvaluationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEvaluationCommandInput extends DeleteEvaluationInput {
}
export interface DeleteEvaluationCommandOutput extends DeleteEvaluationOutput, __MetadataBearer {
}
/**
 * <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p>
 *
 *         <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the
 *           <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p>
 *         <p>
 *             <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteEvaluationCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteEvaluationCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new DeleteEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEvaluationCommandInput} for command's `input` shape.
 * @see {@link DeleteEvaluationCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEvaluationCommand extends $Command<DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DeleteEvaluationCommandInput;
    constructor(input: DeleteEvaluationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
