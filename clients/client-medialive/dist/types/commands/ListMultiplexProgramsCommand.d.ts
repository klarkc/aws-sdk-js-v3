import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListMultiplexProgramsRequest, ListMultiplexProgramsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListMultiplexProgramsCommandInput extends ListMultiplexProgramsRequest {
}
export interface ListMultiplexProgramsCommandOutput extends ListMultiplexProgramsResponse, __MetadataBearer {
}
/**
 * List the programs that currently exist for a specific multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListMultiplexProgramsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListMultiplexProgramsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new ListMultiplexProgramsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultiplexProgramsCommandInput} for command's `input` shape.
 * @see {@link ListMultiplexProgramsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListMultiplexProgramsCommand extends $Command<ListMultiplexProgramsCommandInput, ListMultiplexProgramsCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: ListMultiplexProgramsCommandInput;
    constructor(input: ListMultiplexProgramsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMultiplexProgramsCommandInput, ListMultiplexProgramsCommandOutput>;
    private serialize;
    private deserialize;
}
