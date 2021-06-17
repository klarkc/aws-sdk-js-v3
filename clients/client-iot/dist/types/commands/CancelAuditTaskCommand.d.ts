import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CancelAuditTaskRequest, CancelAuditTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelAuditTaskCommandInput extends CancelAuditTaskRequest {
}
export interface CancelAuditTaskCommandOutput extends CancelAuditTaskResponse, __MetadataBearer {
}
/**
 * <p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelAuditTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelAuditTaskCommandInput} for command's `input` shape.
 * @see {@link CancelAuditTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelAuditTaskCommand extends $Command<CancelAuditTaskCommandInput, CancelAuditTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: CancelAuditTaskCommandInput;
    constructor(input: CancelAuditTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelAuditTaskCommandInput, CancelAuditTaskCommandOutput>;
    private serialize;
    private deserialize;
}
