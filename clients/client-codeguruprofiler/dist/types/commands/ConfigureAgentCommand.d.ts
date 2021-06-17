import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ConfigureAgentRequest, ConfigureAgentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ConfigureAgentCommandInput extends ConfigureAgentRequest {
}
export interface ConfigureAgentCommandOutput extends ConfigureAgentResponse, __MetadataBearer {
}
/**
 * <p>
 *           Used by profiler agents to report their current state and to receive remote
 *           configuration updates. For example, <code>ConfigureAgent</code> can be used
 *          to tell an agent whether to profile or not and for how long to return profiling data.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ConfigureAgentCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ConfigureAgentCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ConfigureAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureAgentCommandInput} for command's `input` shape.
 * @see {@link ConfigureAgentCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ConfigureAgentCommand extends $Command<ConfigureAgentCommandInput, ConfigureAgentCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: ConfigureAgentCommandInput;
    constructor(input: ConfigureAgentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfigureAgentCommandInput, ConfigureAgentCommandOutput>;
    private serialize;
    private deserialize;
}
