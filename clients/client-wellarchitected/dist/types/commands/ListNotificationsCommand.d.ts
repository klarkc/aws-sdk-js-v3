import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListNotificationsInput, ListNotificationsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNotificationsCommandInput extends ListNotificationsInput {
}
export interface ListNotificationsCommandOutput extends ListNotificationsOutput, __MetadataBearer {
}
/**
 * <p>List lens notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListNotificationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListNotificationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNotificationsCommand extends $Command<ListNotificationsCommandInput, ListNotificationsCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListNotificationsCommandInput;
    constructor(input: ListNotificationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNotificationsCommandInput, ListNotificationsCommandOutput>;
    private serialize;
    private deserialize;
}
