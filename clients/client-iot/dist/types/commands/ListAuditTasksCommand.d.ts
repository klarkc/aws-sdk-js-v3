import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditTasksRequest, ListAuditTasksResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAuditTasksCommandInput extends ListAuditTasksRequest {
}
export interface ListAuditTasksCommandOutput extends ListAuditTasksResponse, __MetadataBearer {
}
/**
 * <p>Lists the Device Defender audits that have been performed during a given
 *           time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditTasksCommandInput} for command's `input` shape.
 * @see {@link ListAuditTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAuditTasksCommand extends $Command<ListAuditTasksCommandInput, ListAuditTasksCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListAuditTasksCommandInput;
    constructor(input: ListAuditTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAuditTasksCommandInput, ListAuditTasksCommandOutput>;
    private serialize;
    private deserialize;
}
