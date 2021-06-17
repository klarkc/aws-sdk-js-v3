import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { ListStreamingSessionsRequest, ListStreamingSessionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListStreamingSessionsCommandInput extends ListStreamingSessionsRequest {
}
export interface ListStreamingSessionsCommandOutput extends ListStreamingSessionsResponse, __MetadataBearer {
}
/**
 * <p>Lists the streaming image resources in a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListStreamingSessionsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListStreamingSessionsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new ListStreamingSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListStreamingSessionsCommandInput} for command's `input` shape.
 * @see {@link ListStreamingSessionsCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListStreamingSessionsCommand extends $Command<ListStreamingSessionsCommandInput, ListStreamingSessionsCommandOutput, NimbleClientResolvedConfig> {
    readonly input: ListStreamingSessionsCommandInput;
    constructor(input: ListStreamingSessionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStreamingSessionsCommandInput, ListStreamingSessionsCommandOutput>;
    private serialize;
    private deserialize;
}
