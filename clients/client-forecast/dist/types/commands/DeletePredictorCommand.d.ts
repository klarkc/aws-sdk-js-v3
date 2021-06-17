import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeletePredictorRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePredictorCommandInput extends DeletePredictorRequest {
}
export interface DeletePredictorCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a predictor created using the <a>CreatePredictor</a> operation. You can
 *       delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
 *       To get the status, use the <a>DescribePredictor</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeletePredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeletePredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeletePredictorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePredictorCommandInput} for command's `input` shape.
 * @see {@link DeletePredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePredictorCommand extends $Command<DeletePredictorCommandInput, DeletePredictorCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DeletePredictorCommandInput;
    constructor(input: DeletePredictorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePredictorCommandInput, DeletePredictorCommandOutput>;
    private serialize;
    private deserialize;
}
