import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListWorkloadsInput, ListWorkloadsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorkloadsCommandInput extends ListWorkloadsInput {
}
export interface ListWorkloadsCommandOutput extends ListWorkloadsOutput, __MetadataBearer {
}
/**
 * <p>List workloads. Paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListWorkloadsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListWorkloadsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListWorkloadsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkloadsCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorkloadsCommand extends $Command<ListWorkloadsCommandInput, ListWorkloadsCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListWorkloadsCommandInput;
    constructor(input: ListWorkloadsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkloadsCommandInput, ListWorkloadsCommandOutput>;
    private serialize;
    private deserialize;
}
