import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { CreateVodSourceRequest, CreateVodSourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVodSourceCommandInput extends CreateVodSourceRequest {
}
export interface CreateVodSourceCommandOutput extends CreateVodSourceResponse, __MetadataBearer {
}
/**
 * <p>Creates name for a specific VOD source in a source location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateVodSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateVodSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreateVodSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVodSourceCommandInput} for command's `input` shape.
 * @see {@link CreateVodSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVodSourceCommand extends $Command<CreateVodSourceCommandInput, CreateVodSourceCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: CreateVodSourceCommandInput;
    constructor(input: CreateVodSourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVodSourceCommandInput, CreateVodSourceCommandOutput>;
    private serialize;
    private deserialize;
}
