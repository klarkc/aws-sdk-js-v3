import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListMilestonesInput, ListMilestonesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMilestonesCommandInput extends ListMilestonesInput {
}
export interface ListMilestonesCommandOutput extends ListMilestonesOutput, __MetadataBearer {
}
/**
 * <p>List all milestones for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListMilestonesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListMilestonesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListMilestonesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMilestonesCommandInput} for command's `input` shape.
 * @see {@link ListMilestonesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMilestonesCommand extends $Command<ListMilestonesCommandInput, ListMilestonesCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListMilestonesCommandInput;
    constructor(input: ListMilestonesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMilestonesCommandInput, ListMilestonesCommandOutput>;
    private serialize;
    private deserialize;
}
