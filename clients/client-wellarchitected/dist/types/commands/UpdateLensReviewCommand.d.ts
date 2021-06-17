import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { UpdateLensReviewInput, UpdateLensReviewOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLensReviewCommandInput extends UpdateLensReviewInput {
}
export interface UpdateLensReviewCommandOutput extends UpdateLensReviewOutput, __MetadataBearer {
}
/**
 * <p>Update lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new UpdateLensReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpdateLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLensReviewCommand extends $Command<UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: UpdateLensReviewCommandInput;
    constructor(input: UpdateLensReviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput>;
    private serialize;
    private deserialize;
}
