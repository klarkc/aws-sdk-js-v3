import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateInputRequest, UpdateInputResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateInputCommandInput extends UpdateInputRequest {
}
export interface UpdateInputCommandOutput extends UpdateInputResponse, __MetadataBearer {
}
/**
 * Updates an input.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new UpdateInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInputCommandInput} for command's `input` shape.
 * @see {@link UpdateInputCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateInputCommand extends $Command<UpdateInputCommandInput, UpdateInputCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: UpdateInputCommandInput;
    constructor(input: UpdateInputCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInputCommandInput, UpdateInputCommandOutput>;
    private serialize;
    private deserialize;
}
