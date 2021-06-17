import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSolutionRequest, DescribeSolutionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSolutionCommandInput extends DescribeSolutionRequest {
}
export interface DescribeSolutionCommandOutput extends DescribeSolutionResponse, __MetadataBearer {
}
/**
 * <p>Describes a solution.
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSolutionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSolutionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeSolutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSolutionCommandInput} for command's `input` shape.
 * @see {@link DescribeSolutionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSolutionCommand extends $Command<DescribeSolutionCommandInput, DescribeSolutionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeSolutionCommandInput;
    constructor(input: DescribeSolutionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSolutionCommandInput, DescribeSolutionCommandOutput>;
    private serialize;
    private deserialize;
}
