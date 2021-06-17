import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { ListIPSetsRequest, ListIPSetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListIPSetsCommandInput extends ListIPSetsRequest {
}
export interface ListIPSetsCommandOutput extends ListIPSetsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves an array of <a>IPSetSummary</a> objects for the IP sets that you manage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListIPSetsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListIPSetsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new ListIPSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIPSetsCommandInput} for command's `input` shape.
 * @see {@link ListIPSetsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListIPSetsCommand extends $Command<ListIPSetsCommandInput, ListIPSetsCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: ListIPSetsCommandInput;
    constructor(input: ListIPSetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListIPSetsCommandInput, ListIPSetsCommandOutput>;
    private serialize;
    private deserialize;
}
