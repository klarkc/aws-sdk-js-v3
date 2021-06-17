import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeSolutionVersionRequest, DescribeSolutionVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSolutionVersionCommandInput extends DescribeSolutionVersionRequest {
}
export interface DescribeSolutionVersionCommandOutput extends DescribeSolutionVersionResponse, __MetadataBearer {
}
/**
 * <p>Describes a specific version of a solution. For more information on solutions, see <a>CreateSolution</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeSolutionVersionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeSolutionVersionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new DescribeSolutionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSolutionVersionCommandInput} for command's `input` shape.
 * @see {@link DescribeSolutionVersionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSolutionVersionCommand extends $Command<DescribeSolutionVersionCommandInput, DescribeSolutionVersionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeSolutionVersionCommandInput;
    constructor(input: DescribeSolutionVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSolutionVersionCommandInput, DescribeSolutionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
