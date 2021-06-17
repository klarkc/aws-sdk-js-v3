import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListMitigationActionsRequest, ListMitigationActionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMitigationActionsCommandInput extends ListMitigationActionsRequest {
}
export interface ListMitigationActionsCommandOutput extends ListMitigationActionsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of all mitigation actions that match the specified filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListMitigationActionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListMitigationActionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListMitigationActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMitigationActionsCommandInput} for command's `input` shape.
 * @see {@link ListMitigationActionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMitigationActionsCommand extends $Command<ListMitigationActionsCommandInput, ListMitigationActionsCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListMitigationActionsCommandInput;
    constructor(input: ListMitigationActionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMitigationActionsCommandInput, ListMitigationActionsCommandOutput>;
    private serialize;
    private deserialize;
}
