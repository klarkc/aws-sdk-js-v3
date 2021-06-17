import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListTemplateAliasesRequest, ListTemplateAliasesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTemplateAliasesCommandInput extends ListTemplateAliasesRequest {
}
export interface ListTemplateAliasesCommandOutput extends ListTemplateAliasesResponse, __MetadataBearer {
}
/**
 * <p>Lists all the aliases of a template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListTemplateAliasesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListTemplateAliasesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListTemplateAliasesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTemplateAliasesCommandInput} for command's `input` shape.
 * @see {@link ListTemplateAliasesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTemplateAliasesCommand extends $Command<ListTemplateAliasesCommandInput, ListTemplateAliasesCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListTemplateAliasesCommandInput;
    constructor(input: ListTemplateAliasesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTemplateAliasesCommandInput, ListTemplateAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
