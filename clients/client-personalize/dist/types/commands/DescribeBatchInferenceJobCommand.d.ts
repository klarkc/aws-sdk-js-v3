import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeBatchInferenceJobRequest, DescribeBatchInferenceJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBatchInferenceJobCommandInput extends DescribeBatchInferenceJobRequest {
}
export interface DescribeBatchInferenceJobCommandOutput extends DescribeBatchInferenceJobResponse, __MetadataBearer {
}
/**
 * <p>Gets the properties of a batch inference job including name, Amazon Resource Name (ARN),
 *       status, input and output configurations, and the ARN of the solution version used to generate
 *       the recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeBatchInferenceJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeBatchInferenceJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeBatchInferenceJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBatchInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBatchInferenceJobCommand extends $Command<DescribeBatchInferenceJobCommandInput, DescribeBatchInferenceJobCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeBatchInferenceJobCommandInput;
    constructor(input: DescribeBatchInferenceJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBatchInferenceJobCommandInput, DescribeBatchInferenceJobCommandOutput>;
    private serialize;
    private deserialize;
}
