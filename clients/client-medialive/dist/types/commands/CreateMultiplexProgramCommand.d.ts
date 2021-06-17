import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateMultiplexProgramRequest, CreateMultiplexProgramResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMultiplexProgramCommandInput extends CreateMultiplexProgramRequest {
}
export interface CreateMultiplexProgramCommandOutput extends CreateMultiplexProgramResponse, __MetadataBearer {
}
/**
 * Create a new program in the multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreateMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link CreateMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMultiplexProgramCommand extends $Command<CreateMultiplexProgramCommandInput, CreateMultiplexProgramCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: CreateMultiplexProgramCommandInput;
    constructor(input: CreateMultiplexProgramCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMultiplexProgramCommandInput, CreateMultiplexProgramCommandOutput>;
    private serialize;
    private deserialize;
}
