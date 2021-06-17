import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListThemeAliasesRequest, ListThemeAliasesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThemeAliasesCommandInput extends ListThemeAliasesRequest {
}
export interface ListThemeAliasesCommandOutput extends ListThemeAliasesResponse, __MetadataBearer {
}
/**
 * <p>Lists all the aliases of a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListThemeAliasesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListThemeAliasesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListThemeAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThemeAliasesCommandInput} for command's `input` shape.
 * @see {@link ListThemeAliasesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThemeAliasesCommand extends $Command<ListThemeAliasesCommandInput, ListThemeAliasesCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListThemeAliasesCommandInput;
    constructor(input: ListThemeAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThemeAliasesCommandInput, ListThemeAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
