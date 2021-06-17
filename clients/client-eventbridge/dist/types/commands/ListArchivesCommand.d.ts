import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListArchivesRequest, ListArchivesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListArchivesCommandInput extends ListArchivesRequest {
}
export interface ListArchivesCommandOutput extends ListArchivesResponse, __MetadataBearer {
}
/**
 * <p>Lists your archives. You can either list all the archives or you can provide a prefix to
 *       match to the archive names. Filter parameters are exclusive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListArchivesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListArchivesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new ListArchivesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListArchivesCommandInput} for command's `input` shape.
 * @see {@link ListArchivesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListArchivesCommand extends $Command<ListArchivesCommandInput, ListArchivesCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListArchivesCommandInput;
    constructor(input: ListArchivesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListArchivesCommandInput, ListArchivesCommandOutput>;
    private serialize;
    private deserialize;
}
