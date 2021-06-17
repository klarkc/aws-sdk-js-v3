import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteForecastRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteForecastCommandInput extends DeleteForecastRequest {
}
export interface DeleteForecastCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can
 *       delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
 *       To get the status, use the <a>DescribeForecast</a> operation.</p>
 *          <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you
 *       can no longer query the forecast.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteForecastCommandInput} for command's `input` shape.
 * @see {@link DeleteForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteForecastCommand extends $Command<DeleteForecastCommandInput, DeleteForecastCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DeleteForecastCommandInput;
    constructor(input: DeleteForecastCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteForecastCommandInput, DeleteForecastCommandOutput>;
    private serialize;
    private deserialize;
}
