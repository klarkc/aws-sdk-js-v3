import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateMultiplexRequest, CreateMultiplexResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMultiplexCommandInput extends CreateMultiplexRequest {
}
export interface CreateMultiplexCommandOutput extends CreateMultiplexResponse, __MetadataBearer {
}
/**
 * Create a new multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateMultiplexCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateMultiplexCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreateMultiplexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMultiplexCommandInput} for command's `input` shape.
 * @see {@link CreateMultiplexCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMultiplexCommand extends $Command<CreateMultiplexCommandInput, CreateMultiplexCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: CreateMultiplexCommandInput;
    constructor(input: CreateMultiplexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMultiplexCommandInput, CreateMultiplexCommandOutput>;
    private serialize;
    private deserialize;
}
