import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateMLModelInput, UpdateMLModelOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMLModelCommandInput extends UpdateMLModelInput {
}
export interface UpdateMLModelCommandOutput extends UpdateMLModelOutput, __MetadataBearer {
}
/**
 * <p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p>
 *         <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, UpdateMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, UpdateMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new UpdateMLModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMLModelCommandInput} for command's `input` shape.
 * @see {@link UpdateMLModelCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMLModelCommand extends $Command<UpdateMLModelCommandInput, UpdateMLModelCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: UpdateMLModelCommandInput;
    constructor(input: UpdateMLModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMLModelCommandInput, UpdateMLModelCommandOutput>;
    private serialize;
    private deserialize;
}
