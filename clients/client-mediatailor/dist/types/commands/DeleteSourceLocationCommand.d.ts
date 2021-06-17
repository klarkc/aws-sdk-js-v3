import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeleteSourceLocationRequest, DeleteSourceLocationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSourceLocationCommandInput extends DeleteSourceLocationRequest {
}
export interface DeleteSourceLocationCommandOutput extends DeleteSourceLocationResponse, __MetadataBearer {
}
/**
 * <p>Deletes a source location on a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteSourceLocationCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteSourceLocationCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteSourceLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSourceLocationCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceLocationCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSourceLocationCommand extends $Command<DeleteSourceLocationCommandInput, DeleteSourceLocationCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: DeleteSourceLocationCommandInput;
    constructor(input: DeleteSourceLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSourceLocationCommandInput, DeleteSourceLocationCommandOutput>;
    private serialize;
    private deserialize;
}
