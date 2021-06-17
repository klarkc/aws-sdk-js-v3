import { CloudSearchDomainClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchDomainClient";
import { SuggestRequest, SuggestResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SuggestCommandInput extends SuggestRequest {
}
export interface SuggestCommandOutput extends SuggestResponse, __MetadataBearer {
}
/**
 * <p>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. </p>
 *       <p>For more information about configuring suggesters and retrieving suggestions, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html">Getting Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 *
 *       <p>The endpoint for submitting <code>Suggest</code> requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchDomainClient, SuggestCommand } from "@aws-sdk/client-cloudsearch-domain"; // ES Modules import
 * // const { CloudSearchDomainClient, SuggestCommand } = require("@aws-sdk/client-cloudsearch-domain"); // CommonJS import
 * const client = new CloudSearchDomainClient(config);
 * const command = new SuggestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SuggestCommandInput} for command's `input` shape.
 * @see {@link SuggestCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchDomainClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SuggestCommand extends $Command<SuggestCommandInput, SuggestCommandOutput, CloudSearchDomainClientResolvedConfig> {
    readonly input: SuggestCommandInput;
    constructor(input: SuggestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchDomainClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SuggestCommandInput, SuggestCommandOutput>;
    private serialize;
    private deserialize;
}
