import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentTargetsRequest, ListAssessmentTargetsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssessmentTargetsCommandInput extends ListAssessmentTargetsRequest {
}
export interface ListAssessmentTargetsCommandOutput extends ListAssessmentTargetsResponse, __MetadataBearer {
}
/**
 * <p>Lists the ARNs of the assessment targets within this AWS account. For more
 *          information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment
 *             Targets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListAssessmentTargetsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListAssessmentTargetsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListAssessmentTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssessmentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentTargetsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssessmentTargetsCommand extends $Command<ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListAssessmentTargetsCommandInput;
    constructor(input: ListAssessmentTargetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
