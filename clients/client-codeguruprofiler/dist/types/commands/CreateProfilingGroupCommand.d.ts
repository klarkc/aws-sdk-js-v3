import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { CreateProfilingGroupRequest, CreateProfilingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProfilingGroupCommandInput extends CreateProfilingGroupRequest {
}
export interface CreateProfilingGroupCommandOutput extends CreateProfilingGroupResponse, __MetadataBearer {
}
/**
 * <p>Creates a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, CreateProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, CreateProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new CreateProfilingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProfilingGroupCommand extends $Command<CreateProfilingGroupCommandInput, CreateProfilingGroupCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: CreateProfilingGroupCommandInput;
    constructor(input: CreateProfilingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProfilingGroupCommandInput, CreateProfilingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
