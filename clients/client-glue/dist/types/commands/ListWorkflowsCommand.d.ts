import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListWorkflowsRequest, ListWorkflowsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListWorkflowsCommandInput extends ListWorkflowsRequest {
}
export interface ListWorkflowsCommandOutput extends ListWorkflowsResponse, __MetadataBearer {
}
/**
 * <p>Lists names of workflows created in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListWorkflowsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListWorkflowsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListWorkflowsCommand extends $Command<ListWorkflowsCommandInput, ListWorkflowsCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListWorkflowsCommandInput;
    constructor(input: ListWorkflowsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkflowsCommandInput, ListWorkflowsCommandOutput>;
    private serialize;
    private deserialize;
}
