import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { DeleteProgramRequest, DeleteProgramResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProgramCommandInput extends DeleteProgramRequest {
}
export interface DeleteProgramCommandOutput extends DeleteProgramResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specific program on a specific channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteProgramCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProgramCommandInput} for command's `input` shape.
 * @see {@link DeleteProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProgramCommand extends $Command<DeleteProgramCommandInput, DeleteProgramCommandOutput, MediaTailorClientResolvedConfig> {
    readonly input: DeleteProgramCommandInput;
    constructor(input: DeleteProgramCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaTailorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProgramCommandInput, DeleteProgramCommandOutput>;
    private serialize;
    private deserialize;
}
