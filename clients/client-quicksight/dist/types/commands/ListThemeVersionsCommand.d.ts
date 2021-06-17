import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListThemeVersionsRequest, ListThemeVersionsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListThemeVersionsCommandInput extends ListThemeVersionsRequest {
}
export interface ListThemeVersionsCommandOutput extends ListThemeVersionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all the versions of the themes in the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListThemeVersionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListThemeVersionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new ListThemeVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThemeVersionsCommandInput} for command's `input` shape.
 * @see {@link ListThemeVersionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListThemeVersionsCommand extends $Command<ListThemeVersionsCommandInput, ListThemeVersionsCommandOutput, QuickSightClientResolvedConfig> {
    readonly input: ListThemeVersionsCommandInput;
    constructor(input: ListThemeVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QuickSightClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListThemeVersionsCommandInput, ListThemeVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
