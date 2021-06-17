import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditSuppressionsRequest, ListAuditSuppressionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAuditSuppressionsCommandInput extends ListAuditSuppressionsRequest {
}
export interface ListAuditSuppressionsCommandOutput extends ListAuditSuppressionsResponse, __MetadataBearer {
}
/**
 * <p>
 *       Lists your Device Defender audit listings.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditSuppressionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditSuppressionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditSuppressionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditSuppressionsCommandInput} for command's `input` shape.
 * @see {@link ListAuditSuppressionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAuditSuppressionsCommand extends $Command<ListAuditSuppressionsCommandInput, ListAuditSuppressionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListAuditSuppressionsCommandInput;
    constructor(input: ListAuditSuppressionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAuditSuppressionsCommandInput, ListAuditSuppressionsCommandOutput>;
    private serialize;
    private deserialize;
}
