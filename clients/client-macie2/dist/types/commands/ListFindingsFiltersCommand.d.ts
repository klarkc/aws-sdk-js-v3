import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { ListFindingsFiltersRequest, ListFindingsFiltersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFindingsFiltersCommandInput extends ListFindingsFiltersRequest {
}
export interface ListFindingsFiltersCommandOutput extends ListFindingsFiltersResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a subset of information about all the findings filters for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, ListFindingsFiltersCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, ListFindingsFiltersCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new ListFindingsFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingsFiltersCommandInput} for command's `input` shape.
 * @see {@link ListFindingsFiltersCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFindingsFiltersCommand extends $Command<ListFindingsFiltersCommandInput, ListFindingsFiltersCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: ListFindingsFiltersCommandInput;
    constructor(input: ListFindingsFiltersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFindingsFiltersCommandInput, ListFindingsFiltersCommandOutput>;
    private serialize;
    private deserialize;
}
