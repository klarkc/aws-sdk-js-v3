import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditMitigationActionsExecutionsRequest, ListAuditMitigationActionsExecutionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAuditMitigationActionsExecutionsCommandInput extends ListAuditMitigationActionsExecutionsRequest {
}
export interface ListAuditMitigationActionsExecutionsCommandOutput extends ListAuditMitigationActionsExecutionsResponse, __MetadataBearer {
}
/**
 * <p>Gets the status of audit mitigation action tasks that were
 *       executed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditMitigationActionsExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditMitigationActionsExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditMitigationActionsExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditMitigationActionsExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListAuditMitigationActionsExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAuditMitigationActionsExecutionsCommand extends $Command<ListAuditMitigationActionsExecutionsCommandInput, ListAuditMitigationActionsExecutionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListAuditMitigationActionsExecutionsCommandInput;
    constructor(input: ListAuditMitigationActionsExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAuditMitigationActionsExecutionsCommandInput, ListAuditMitigationActionsExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
