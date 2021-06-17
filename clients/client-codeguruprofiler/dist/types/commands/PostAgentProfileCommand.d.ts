import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { PostAgentProfileRequest, PostAgentProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PostAgentProfileCommandInput extends PostAgentProfileRequest {
}
export interface PostAgentProfileCommandOutput extends PostAgentProfileResponse, __MetadataBearer {
}
/**
 * <p>
 *          Submits profiling data to an aggregated profile of a profiling group. To get an
 *          aggregated profile that is created with this profiling data, use
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_GetProfile.html">
 *                <code>GetProfile</code>
 *             </a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, PostAgentProfileCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, PostAgentProfileCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new PostAgentProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PostAgentProfileCommandInput} for command's `input` shape.
 * @see {@link PostAgentProfileCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PostAgentProfileCommand extends $Command<PostAgentProfileCommandInput, PostAgentProfileCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: PostAgentProfileCommandInput;
    constructor(input: PostAgentProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PostAgentProfileCommandInput, PostAgentProfileCommandOutput>;
    private serialize;
    private deserialize;
}
