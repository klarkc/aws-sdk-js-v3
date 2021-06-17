import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { GetSolutionMetricsRequest, GetSolutionMetricsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSolutionMetricsCommandInput extends GetSolutionMetricsRequest {
}
export interface GetSolutionMetricsCommandOutput extends GetSolutionMetricsResponse, __MetadataBearer {
}
/**
 * <p>Gets the metrics for the specified solution version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, GetSolutionMetricsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, GetSolutionMetricsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new GetSolutionMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSolutionMetricsCommandInput} for command's `input` shape.
 * @see {@link GetSolutionMetricsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSolutionMetricsCommand extends $Command<GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: GetSolutionMetricsCommandInput;
    constructor(input: GetSolutionMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
