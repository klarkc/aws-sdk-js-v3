import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DeleteAlertRequest, DeleteAlertResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAlertCommandInput extends DeleteAlertRequest {
}
export interface DeleteAlertCommandOutput extends DeleteAlertResponse, __MetadataBearer {
}
/**
 * <p>Deletes an alert.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DeleteAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DeleteAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DeleteAlertCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAlertCommandInput} for command's `input` shape.
 * @see {@link DeleteAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAlertCommand extends $Command<DeleteAlertCommandInput, DeleteAlertCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: DeleteAlertCommandInput;
    constructor(input: DeleteAlertCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAlertCommandInput, DeleteAlertCommandOutput>;
    private serialize;
    private deserialize;
}
