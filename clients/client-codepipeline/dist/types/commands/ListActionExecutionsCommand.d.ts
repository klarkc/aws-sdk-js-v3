import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListActionExecutionsInput, ListActionExecutionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListActionExecutionsCommandInput extends ListActionExecutionsInput {
}
export interface ListActionExecutionsCommandOutput extends ListActionExecutionsOutput, __MetadataBearer {
}
/**
 * <p>Lists the action executions that have occurred in a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListActionExecutionsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListActionExecutionsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListActionExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActionExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListActionExecutionsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListActionExecutionsCommand extends $Command<ListActionExecutionsCommandInput, ListActionExecutionsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListActionExecutionsCommandInput;
    constructor(input: ListActionExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActionExecutionsCommandInput, ListActionExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
