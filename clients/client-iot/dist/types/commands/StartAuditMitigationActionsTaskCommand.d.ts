import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartAuditMitigationActionsTaskRequest, StartAuditMitigationActionsTaskResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartAuditMitigationActionsTaskCommandInput extends StartAuditMitigationActionsTaskRequest {
}
export interface StartAuditMitigationActionsTaskCommandOutput extends StartAuditMitigationActionsTaskResponse, __MetadataBearer {
}
/**
 * <p>Starts a task that applies a set of mitigation actions to the specified target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StartAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link StartAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartAuditMitigationActionsTaskCommand extends $Command<StartAuditMitigationActionsTaskCommandInput, StartAuditMitigationActionsTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: StartAuditMitigationActionsTaskCommandInput;
    constructor(input: StartAuditMitigationActionsTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAuditMitigationActionsTaskCommandInput, StartAuditMitigationActionsTaskCommandOutput>;
    private serialize;
    private deserialize;
}
