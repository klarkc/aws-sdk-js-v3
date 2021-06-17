import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeQuerySuggestionsBlockListRequest, DescribeQuerySuggestionsBlockListResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeQuerySuggestionsBlockListCommandInput extends DescribeQuerySuggestionsBlockListRequest {
}
export interface DescribeQuerySuggestionsBlockListCommandOutput extends DescribeQuerySuggestionsBlockListResponse, __MetadataBearer {
}
/**
 * <p>Describes a block list used for query suggestions for an index.</p>
 *         <p>This is used to check the current settings that are applied to a
 *             block list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeQuerySuggestionsBlockListCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeQuerySuggestionsBlockListCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeQuerySuggestionsBlockListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeQuerySuggestionsBlockListCommandInput} for command's `input` shape.
 * @see {@link DescribeQuerySuggestionsBlockListCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeQuerySuggestionsBlockListCommand extends $Command<DescribeQuerySuggestionsBlockListCommandInput, DescribeQuerySuggestionsBlockListCommandOutput, KendraClientResolvedConfig> {
    readonly input: DescribeQuerySuggestionsBlockListCommandInput;
    constructor(input: DescribeQuerySuggestionsBlockListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeQuerySuggestionsBlockListCommandInput, DescribeQuerySuggestionsBlockListCommandOutput>;
    private serialize;
    private deserialize;
}
