import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { GetLensReviewReportInput, GetLensReviewReportOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLensReviewReportCommandInput extends GetLensReviewReportInput {
}
export interface GetLensReviewReportCommandOutput extends GetLensReviewReportOutput, __MetadataBearer {
}
/**
 * <p>Get lens review report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensReviewReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensReviewReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new GetLensReviewReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLensReviewReportCommandInput} for command's `input` shape.
 * @see {@link GetLensReviewReportCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLensReviewReportCommand extends $Command<GetLensReviewReportCommandInput, GetLensReviewReportCommandOutput, WellArchitectedClientResolvedConfig> {
    readonly input: GetLensReviewReportCommandInput;
    constructor(input: GetLensReviewReportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WellArchitectedClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLensReviewReportCommandInput, GetLensReviewReportCommandOutput>;
    private serialize;
    private deserialize;
}
