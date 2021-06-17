import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ListFindingsReportsRequest, ListFindingsReportsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFindingsReportsCommandInput extends ListFindingsReportsRequest {
}
export interface ListFindingsReportsCommandOutput extends ListFindingsReportsResponse, __MetadataBearer {
}
/**
 * <p>List the available reports for a given profiling group and time range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListFindingsReportsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListFindingsReportsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ListFindingsReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFindingsReportsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsReportsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFindingsReportsCommand extends $Command<ListFindingsReportsCommandInput, ListFindingsReportsCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: ListFindingsReportsCommandInput;
    constructor(input: ListFindingsReportsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFindingsReportsCommandInput, ListFindingsReportsCommandOutput>;
    private serialize;
    private deserialize;
}
