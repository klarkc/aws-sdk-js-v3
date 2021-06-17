import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditMitigationActionsTasksRequest, ListAuditMitigationActionsTasksResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAuditMitigationActionsTasksCommandInput extends ListAuditMitigationActionsTasksRequest {
}
export interface ListAuditMitigationActionsTasksCommandOutput extends ListAuditMitigationActionsTasksResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of audit mitigation action tasks that match the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditMitigationActionsTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditMitigationActionsTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditMitigationActionsTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditMitigationActionsTasksCommandInput} for command's `input` shape.
 * @see {@link ListAuditMitigationActionsTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAuditMitigationActionsTasksCommand extends $Command<ListAuditMitigationActionsTasksCommandInput, ListAuditMitigationActionsTasksCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListAuditMitigationActionsTasksCommandInput;
    constructor(input: ListAuditMitigationActionsTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAuditMitigationActionsTasksCommandInput, ListAuditMitigationActionsTasksCommandOutput>;
    private serialize;
    private deserialize;
}
