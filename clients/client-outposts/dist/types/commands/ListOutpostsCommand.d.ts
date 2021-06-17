import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { ListOutpostsInput, ListOutpostsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOutpostsCommandInput extends ListOutpostsInput {
}
export interface ListOutpostsCommandOutput extends ListOutpostsOutput, __MetadataBearer {
}
/**
 * <p>List the Outposts for your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListOutpostsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListOutpostsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new ListOutpostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOutpostsCommandInput} for command's `input` shape.
 * @see {@link ListOutpostsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOutpostsCommand extends $Command<ListOutpostsCommandInput, ListOutpostsCommandOutput, OutpostsClientResolvedConfig> {
    readonly input: ListOutpostsCommandInput;
    constructor(input: ListOutpostsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OutpostsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOutpostsCommandInput, ListOutpostsCommandOutput>;
    private serialize;
    private deserialize;
}
