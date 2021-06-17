import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeleteVodSourceRequest, DeleteVodSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVodSourceCommandInput extends DeleteVodSourceRequest {
}
export interface DeleteVodSourceCommandOutput extends DeleteVodSourceResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specific VOD source in a specific source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteVodSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVodSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVodSourceCommand extends $Command<DeleteVodSourceCommandInput, DeleteVodSourceCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: DeleteVodSourceCommandInput;
    constructor(input: DeleteVodSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVodSourceCommandInput, DeleteVodSourceCommandOutput>;
    private serialize;
    private deserialize;
}
