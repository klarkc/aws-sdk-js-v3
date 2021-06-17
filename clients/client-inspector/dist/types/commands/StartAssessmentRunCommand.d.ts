import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { StartAssessmentRunRequest, StartAssessmentRunResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartAssessmentRunCommandInput extends StartAssessmentRunRequest {
}
export interface StartAssessmentRunCommandOutput extends StartAssessmentRunResponse, __MetadataBearer {
}
/**
 * <p>Starts the assessment run specified by the ARN of the assessment template. For this
 *          API to function properly, you must not exceed the limit of running up to 500 concurrent
 *          agents per AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, StartAssessmentRunCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, StartAssessmentRunCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new StartAssessmentRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAssessmentRunCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentRunCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartAssessmentRunCommand extends $Command<StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput, InspectorClientResolvedConfig> {
    readonly input: StartAssessmentRunCommandInput;
    constructor(input: StartAssessmentRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput>;
    private serialize;
    private deserialize;
}
