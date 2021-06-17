import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListNotebookExecutionsInput, ListNotebookExecutionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNotebookExecutionsCommandInput extends ListNotebookExecutionsInput {
}
export interface ListNotebookExecutionsCommandOutput extends ListNotebookExecutionsOutput, __MetadataBearer {
}
/**
 * <p>Provides summaries of all notebook executions. You can filter the list based on multiple
 *          criteria such as status, time range, and editor id. Returns a maximum of 50 notebook
 *          executions and a marker to track the paging of a longer notebook execution list across
 *          multiple <code>ListNotebookExecution</code> calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListNotebookExecutionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListNotebookExecutionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new ListNotebookExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookExecutionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNotebookExecutionsCommand extends $Command<ListNotebookExecutionsCommandInput, ListNotebookExecutionsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ListNotebookExecutionsCommandInput;
    constructor(input: ListNotebookExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNotebookExecutionsCommandInput, ListNotebookExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
