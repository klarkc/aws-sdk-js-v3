import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListLensesInput, ListLensesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLensesCommandInput extends ListLensesInput {
}
export interface ListLensesCommandOutput extends ListLensesOutput, __MetadataBearer {
}
/**
 * <p>List the available lenses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListLensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLensesCommandInput} for command's `input` shape.
 * @see {@link ListLensesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLensesCommand extends $Command<ListLensesCommandInput, ListLensesCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListLensesCommandInput;
    constructor(input: ListLensesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLensesCommandInput, ListLensesCommandOutput>;
    private serialize;
    private deserialize;
}
