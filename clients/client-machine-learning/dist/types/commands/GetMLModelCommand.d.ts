import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetMLModelInput, GetMLModelOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMLModelCommandInput extends GetMLModelInput {
}
export interface GetMLModelCommandOutput extends GetMLModelOutput, __MetadataBearer {
}
/**
 * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p>
 *         <p>
 *             <code>GetMLModel</code> provides results in normal or verbose format. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, GetMLModelCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, GetMLModelCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new GetMLModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMLModelCommandInput} for command's `input` shape.
 * @see {@link GetMLModelCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMLModelCommand extends $Command<GetMLModelCommandInput, GetMLModelCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: GetMLModelCommandInput;
    constructor(input: GetMLModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMLModelCommandInput, GetMLModelCommandOutput>;
    private serialize;
    private deserialize;
}
