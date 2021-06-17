import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { SearchResourcesRequest, SearchResourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchResourcesCommandInput extends SearchResourcesRequest {
}
export interface SearchResourcesCommandOutput extends SearchResourcesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves (queries) statistical data and other information about AWS resources that Amazon Macie monitors and analyzes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, SearchResourcesCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, SearchResourcesCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new SearchResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchResourcesCommandInput} for command's `input` shape.
 * @see {@link SearchResourcesCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchResourcesCommand extends $Command<SearchResourcesCommandInput, SearchResourcesCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: SearchResourcesCommandInput;
    constructor(input: SearchResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchResourcesCommandInput, SearchResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
