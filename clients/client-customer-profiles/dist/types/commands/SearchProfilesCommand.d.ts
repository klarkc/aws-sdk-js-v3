import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { SearchProfilesRequest, SearchProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchProfilesCommandInput extends SearchProfilesRequest {
}
export interface SearchProfilesCommandOutput extends SearchProfilesResponse, __MetadataBearer {
}
/**
 * <p>Searches for profiles within a specific domain name using name, phone number, email
 *          address, account number, or a custom defined index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, SearchProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, SearchProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new SearchProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchProfilesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchProfilesCommand extends $Command<SearchProfilesCommandInput, SearchProfilesCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: SearchProfilesCommandInput;
    constructor(input: SearchProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchProfilesCommandInput, SearchProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
