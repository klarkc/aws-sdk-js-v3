import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListLensReviewsInput, ListLensReviewsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLensReviewsCommandInput extends ListLensReviewsInput {
}
export interface ListLensReviewsCommandOutput extends ListLensReviewsOutput, __MetadataBearer {
}
/**
 * <p>List lens reviews.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListLensReviewsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLensReviewsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLensReviewsCommand extends $Command<ListLensReviewsCommandInput, ListLensReviewsCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListLensReviewsCommandInput;
    constructor(input: ListLensReviewsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLensReviewsCommandInput, ListLensReviewsCommandOutput>;
    private serialize;
    private deserialize;
}
