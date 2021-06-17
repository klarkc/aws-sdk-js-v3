import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { DeleteProfilingGroupRequest, DeleteProfilingGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProfilingGroupCommandInput extends DeleteProfilingGroupRequest {
}
export interface DeleteProfilingGroupCommandOutput extends DeleteProfilingGroupResponse, __MetadataBearer {
}
/**
 * <p>Deletes a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, DeleteProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, DeleteProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new DeleteProfilingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProfilingGroupCommand extends $Command<DeleteProfilingGroupCommandInput, DeleteProfilingGroupCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: DeleteProfilingGroupCommandInput;
    constructor(input: DeleteProfilingGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProfilingGroupCommandInput, DeleteProfilingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
