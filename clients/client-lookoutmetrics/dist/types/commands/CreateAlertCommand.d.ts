import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { CreateAlertRequest, CreateAlertResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateAlertCommandInput extends CreateAlertRequest {
}
export interface CreateAlertCommandOutput extends CreateAlertResponse, __MetadataBearer {
}
/**
 * <p>Creates an alert for an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new CreateAlertCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAlertCommandInput} for command's `input` shape.
 * @see {@link CreateAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateAlertCommand extends $Command<CreateAlertCommandInput, CreateAlertCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: CreateAlertCommandInput;
    constructor(input: CreateAlertCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAlertCommandInput, CreateAlertCommandOutput>;
    private serialize;
    private deserialize;
}
