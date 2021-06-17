import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ListProfilingGroupsRequest, ListProfilingGroupsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProfilingGroupsCommandInput extends ListProfilingGroupsRequest {
}
export interface ListProfilingGroupsCommandOutput extends ListProfilingGroupsResponse, __MetadataBearer {
}
/**
 * <p>
 *          Returns a list of profiling groups. The profiling groups are returned as
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
 *                <code>ProfilingGroupDescription</code>
 *             </a>
 *          objects.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListProfilingGroupsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListProfilingGroupsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ListProfilingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfilingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProfilingGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProfilingGroupsCommand extends $Command<ListProfilingGroupsCommandInput, ListProfilingGroupsCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: ListProfilingGroupsCommandInput;
    constructor(input: ListProfilingGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProfilingGroupsCommandInput, ListProfilingGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
