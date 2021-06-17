import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartOnDemandAuditTaskRequest, StartOnDemandAuditTaskResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartOnDemandAuditTaskCommandInput extends StartOnDemandAuditTaskRequest {
}
export interface StartOnDemandAuditTaskCommandOutput extends StartOnDemandAuditTaskResponse, __MetadataBearer {
}
/**
 * <p>Starts an on-demand Device Defender audit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartOnDemandAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartOnDemandAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StartOnDemandAuditTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartOnDemandAuditTaskCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandAuditTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartOnDemandAuditTaskCommand extends $Command<StartOnDemandAuditTaskCommandInput, StartOnDemandAuditTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: StartOnDemandAuditTaskCommandInput;
    constructor(input: StartOnDemandAuditTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartOnDemandAuditTaskCommandInput, StartOnDemandAuditTaskCommandOutput>;
    private serialize;
    private deserialize;
}
