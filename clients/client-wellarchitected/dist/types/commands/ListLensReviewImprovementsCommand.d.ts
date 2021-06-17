import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListLensReviewImprovementsInput, ListLensReviewImprovementsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLensReviewImprovementsCommandInput extends ListLensReviewImprovementsInput {
}
export interface ListLensReviewImprovementsCommandOutput extends ListLensReviewImprovementsOutput, __MetadataBearer {
}
/**
 * <p>List lens review improvements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewImprovementsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewImprovementsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListLensReviewImprovementsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLensReviewImprovementsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewImprovementsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLensReviewImprovementsCommand extends $Command<ListLensReviewImprovementsCommandInput, ListLensReviewImprovementsCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: ListLensReviewImprovementsCommandInput;
    constructor(input: ListLensReviewImprovementsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLensReviewImprovementsCommandInput, ListLensReviewImprovementsCommandOutput>;
    private serialize;
    private deserialize;
}
