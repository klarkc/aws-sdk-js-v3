import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { GetQuerySuggestionsRequest, GetQuerySuggestionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetQuerySuggestionsCommandInput extends GetQuerySuggestionsRequest {
}
export interface GetQuerySuggestionsCommandOutput extends GetQuerySuggestionsResponse, __MetadataBearer {
}
/**
 * <p>Fetches the queries that are suggested to your users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, GetQuerySuggestionsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, GetQuerySuggestionsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new GetQuerySuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQuerySuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetQuerySuggestionsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetQuerySuggestionsCommand extends $Command<GetQuerySuggestionsCommandInput, GetQuerySuggestionsCommandOutput, KendraClientResolvedConfig> {
    readonly input: GetQuerySuggestionsCommandInput;
    constructor(input: GetQuerySuggestionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQuerySuggestionsCommandInput, GetQuerySuggestionsCommandOutput>;
    private serialize;
    private deserialize;
}
