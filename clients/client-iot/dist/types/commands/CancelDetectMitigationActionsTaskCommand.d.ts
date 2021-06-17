import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CancelDetectMitigationActionsTaskRequest, CancelDetectMitigationActionsTaskResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelDetectMitigationActionsTaskCommandInput extends CancelDetectMitigationActionsTaskRequest {
}
export interface CancelDetectMitigationActionsTaskCommandOutput extends CancelDetectMitigationActionsTaskResponse, __MetadataBearer {
}
/**
 * <p>
 *         Cancels a Device Defender ML Detect mitigation action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelDetectMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelDetectMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelDetectMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDetectMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link CancelDetectMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelDetectMitigationActionsTaskCommand extends $Command<CancelDetectMitigationActionsTaskCommandInput, CancelDetectMitigationActionsTaskCommandOutput, IoTClientResolvedConfig> {
    readonly input: CancelDetectMitigationActionsTaskCommandInput;
    constructor(input: CancelDetectMitigationActionsTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelDetectMitigationActionsTaskCommandInput, CancelDetectMitigationActionsTaskCommandOutput>;
    private serialize;
    private deserialize;
}
