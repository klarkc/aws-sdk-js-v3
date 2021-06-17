import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { ListJobRunsRequest, ListJobRunsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListJobRunsCommandInput extends ListJobRunsRequest {
}
export interface ListJobRunsCommandOutput extends ListJobRunsResponse, __MetadataBearer {
}
/**
 * <p>Lists all of the previous runs of a particular DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListJobRunsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListJobRunsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListJobRunsCommand extends $Command<ListJobRunsCommandInput, ListJobRunsCommandOutput, DataBrewClientResolvedConfig> {
    readonly input: ListJobRunsCommandInput;
    constructor(input: ListJobRunsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataBrewClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListJobRunsCommandInput, ListJobRunsCommandOutput>;
    private serialize;
    private deserialize;
}
