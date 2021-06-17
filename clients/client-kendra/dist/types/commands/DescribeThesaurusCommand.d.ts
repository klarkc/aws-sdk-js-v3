import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeThesaurusRequest, DescribeThesaurusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeThesaurusCommandInput extends DescribeThesaurusRequest {
}
export interface DescribeThesaurusCommandOutput extends DescribeThesaurusResponse, __MetadataBearer {
}
/**
 * <p>Describes an existing Amazon Kendra thesaurus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeThesaurusCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeThesaurusCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new DescribeThesaurusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThesaurusCommandInput} for command's `input` shape.
 * @see {@link DescribeThesaurusCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeThesaurusCommand extends $Command<DescribeThesaurusCommandInput, DescribeThesaurusCommandOutput, KendraClientResolvedConfig> {
    readonly input: DescribeThesaurusCommandInput;
    constructor(input: DescribeThesaurusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeThesaurusCommandInput, DescribeThesaurusCommandOutput>;
    private serialize;
    private deserialize;
}
