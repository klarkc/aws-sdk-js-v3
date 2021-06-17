import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListPipelineExecutionsInput, ListPipelineExecutionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPipelineExecutionsCommandInput extends ListPipelineExecutionsInput {
}
export interface ListPipelineExecutionsCommandOutput extends ListPipelineExecutionsOutput, __MetadataBearer {
}
/**
 * <p>Gets a summary of the most recent executions for a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListPipelineExecutionsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListPipelineExecutionsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListPipelineExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelineExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPipelineExecutionsCommand extends $Command<ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListPipelineExecutionsCommandInput;
    constructor(input: ListPipelineExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
