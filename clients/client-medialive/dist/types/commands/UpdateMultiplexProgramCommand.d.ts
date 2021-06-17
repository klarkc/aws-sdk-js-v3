import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateMultiplexProgramRequest, UpdateMultiplexProgramResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateMultiplexProgramCommandInput extends UpdateMultiplexProgramRequest {
}
export interface UpdateMultiplexProgramCommandOutput extends UpdateMultiplexProgramResponse, __MetadataBearer {
}
/**
 * Update a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateMultiplexProgramCommand extends $Command<UpdateMultiplexProgramCommandInput, UpdateMultiplexProgramCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: UpdateMultiplexProgramCommandInput;
    constructor(input: UpdateMultiplexProgramCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMultiplexProgramCommandInput, UpdateMultiplexProgramCommandOutput>;
    private serialize;
    private deserialize;
}
