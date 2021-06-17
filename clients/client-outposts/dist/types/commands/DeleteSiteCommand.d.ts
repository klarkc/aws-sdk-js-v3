import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { DeleteSiteInput, DeleteSiteOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSiteCommandInput extends DeleteSiteInput {
}
export interface DeleteSiteCommandOutput extends DeleteSiteOutput, __MetadataBearer {
}
/**
 * <p>Deletes the site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, DeleteSiteCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, DeleteSiteCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const command = new DeleteSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSiteCommandInput} for command's `input` shape.
 * @see {@link DeleteSiteCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSiteCommand extends $Command<DeleteSiteCommandInput, DeleteSiteCommandOutput, OutpostsClientResolvedConfig> {
    readonly input: DeleteSiteCommandInput;
    constructor(input: DeleteSiteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OutpostsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSiteCommandInput, DeleteSiteCommandOutput>;
    private serialize;
    private deserialize;
}
