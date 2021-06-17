import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ListProfileTimesRequest, ListProfileTimesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProfileTimesCommandInput extends ListProfileTimesRequest {
}
export interface ListProfileTimesCommandOutput extends ListProfileTimesResponse, __MetadataBearer {
}
/**
 * <p>Lists the start times of the available aggregated profiles of a profiling group
 *         for an aggregation period within the specified time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListProfileTimesCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListProfileTimesCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ListProfileTimesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProfileTimesCommandInput} for command's `input` shape.
 * @see {@link ListProfileTimesCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProfileTimesCommand extends $Command<ListProfileTimesCommandInput, ListProfileTimesCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: ListProfileTimesCommandInput;
    constructor(input: ListProfileTimesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProfileTimesCommandInput, ListProfileTimesCommandOutput>;
    private serialize;
    private deserialize;
}
