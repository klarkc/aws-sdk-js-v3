import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateSourceLocationRequest, UpdateSourceLocationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSourceLocationCommandInput extends UpdateSourceLocationRequest {
}
export interface UpdateSourceLocationCommandOutput extends UpdateSourceLocationResponse, __MetadataBearer {
}
/**
 * <p>Updates a source location on a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new UpdateSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSourceLocationCommandInput} for command's `input` shape.
 * @see {@link UpdateSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSourceLocationCommand extends $Command<UpdateSourceLocationCommandInput, UpdateSourceLocationCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: UpdateSourceLocationCommandInput;
    constructor(input: UpdateSourceLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSourceLocationCommandInput, UpdateSourceLocationCommandOutput>;
    private serialize;
    private deserialize;
}
