import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { GetLensReviewInput, GetLensReviewOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLensReviewCommandInput extends GetLensReviewInput {
}
export interface GetLensReviewCommandOutput extends GetLensReviewOutput, __MetadataBearer {
}
/**
 * <p>Get lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetLensReviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLensReviewCommandInput} for command's `input` shape.
 * @see {@link GetLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLensReviewCommand extends $Command<GetLensReviewCommandInput, GetLensReviewCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: GetLensReviewCommandInput;
    constructor(input: GetLensReviewCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLensReviewCommandInput, GetLensReviewCommandOutput>;
    private serialize;
    private deserialize;
}
