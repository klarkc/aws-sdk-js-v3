import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateVodSourceRequest, UpdateVodSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateVodSourceCommandInput extends UpdateVodSourceRequest {
}
export interface UpdateVodSourceCommandOutput extends UpdateVodSourceResponse, __MetadataBearer {
}
/**
 * <p>Updates a specific VOD source in a specific source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new UpdateVodSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateVodSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateVodSourceCommand extends $Command<UpdateVodSourceCommandInput, UpdateVodSourceCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: UpdateVodSourceCommandInput;
    constructor(input: UpdateVodSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateVodSourceCommandInput, UpdateVodSourceCommandOutput>;
    private serialize;
    private deserialize;
}
