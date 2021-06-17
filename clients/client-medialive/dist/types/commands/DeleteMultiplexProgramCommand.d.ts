import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteMultiplexProgramRequest, DeleteMultiplexProgramResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteMultiplexProgramCommandInput extends DeleteMultiplexProgramRequest {
}
export interface DeleteMultiplexProgramCommandOutput extends DeleteMultiplexProgramResponse, __MetadataBearer {
}
/**
 * Delete a program from a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new DeleteMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteMultiplexProgramCommand extends $Command<DeleteMultiplexProgramCommandInput, DeleteMultiplexProgramCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: DeleteMultiplexProgramCommandInput;
    constructor(input: DeleteMultiplexProgramCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMultiplexProgramCommandInput, DeleteMultiplexProgramCommandOutput>;
    private serialize;
    private deserialize;
}
