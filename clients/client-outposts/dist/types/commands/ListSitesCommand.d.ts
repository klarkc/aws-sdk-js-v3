import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { ListSitesInput, ListSitesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListSitesCommandInput extends ListSitesInput {
}
export interface ListSitesCommandOutput extends ListSitesOutput, __MetadataBearer {
}
/**
 * <p>Lists the sites for the specified AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListSitesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListSitesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new ListSitesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSitesCommandInput} for command's `input` shape.
 * @see {@link ListSitesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListSitesCommand extends $Command<ListSitesCommandInput, ListSitesCommandOutput, OutpostsClientResolvedConfig> {
    readonly input: ListSitesCommandInput;
    constructor(input: ListSitesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OutpostsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSitesCommandInput, ListSitesCommandOutput>;
    private serialize;
    private deserialize;
}
