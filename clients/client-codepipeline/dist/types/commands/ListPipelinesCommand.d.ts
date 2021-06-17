import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListPipelinesInput, ListPipelinesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPipelinesCommandInput extends ListPipelinesInput {
}
export interface ListPipelinesCommandOutput extends ListPipelinesOutput, __MetadataBearer {
}
/**
 * <p>Gets a summary of all of the pipelines associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListPipelinesCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListPipelinesCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPipelinesCommand extends $Command<ListPipelinesCommandInput, ListPipelinesCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListPipelinesCommandInput;
    constructor(input: ListPipelinesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPipelinesCommandInput, ListPipelinesCommandOutput>;
    private serialize;
    private deserialize;
}
