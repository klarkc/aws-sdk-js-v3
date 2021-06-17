import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListWebACLsRequest, ListWebACLsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWebACLsCommandInput extends ListWebACLsRequest {
}
export interface ListWebACLsCommandOutput extends ListWebACLsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves an array of <a>WebACLSummary</a> objects for the web ACLs that you manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListWebACLsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListWebACLsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListWebACLsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebACLsCommandInput} for command's `input` shape.
 * @see {@link ListWebACLsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWebACLsCommand extends $Command<ListWebACLsCommandInput, ListWebACLsCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: ListWebACLsCommandInput;
    constructor(input: ListWebACLsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWebACLsCommandInput, ListWebACLsCommandOutput>;
    private serialize;
    private deserialize;
}
