import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetAssessmentReportRequest, GetAssessmentReportResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAssessmentReportCommandInput extends GetAssessmentReportRequest {
}
export interface GetAssessmentReportCommandOutput extends GetAssessmentReportResponse, __MetadataBearer {
}
/**
 * <p>Produces an assessment report that includes detailed and comprehensive results of a
 *          specified assessment run. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, GetAssessmentReportCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, GetAssessmentReportCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new GetAssessmentReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssessmentReportCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentReportCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAssessmentReportCommand extends $Command<GetAssessmentReportCommandInput, GetAssessmentReportCommandOutput, InspectorClientResolvedConfig> {
    readonly input: GetAssessmentReportCommandInput;
    constructor(input: GetAssessmentReportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssessmentReportCommandInput, GetAssessmentReportCommandOutput>;
    private serialize;
    private deserialize;
}
