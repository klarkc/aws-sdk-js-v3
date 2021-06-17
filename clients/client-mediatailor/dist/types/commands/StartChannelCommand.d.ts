import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { StartChannelRequest, StartChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartChannelCommandInput extends StartChannelRequest {
}
export interface StartChannelCommandOutput extends StartChannelResponse, __MetadataBearer {
}
/**
 * <p>Starts a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, StartChannelCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, StartChannelCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new StartChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChannelCommandInput} for command's `input` shape.
 * @see {@link StartChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartChannelCommand extends $Command<StartChannelCommandInput, StartChannelCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: StartChannelCommandInput;
    constructor(input: StartChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartChannelCommandInput, StartChannelCommandOutput>;
    private serialize;
    private deserialize;
}
