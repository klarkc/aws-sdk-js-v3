import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetPipelineStateInput, GetPipelineStateOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPipelineStateCommandInput extends GetPipelineStateInput {
}
export interface GetPipelineStateCommandOutput extends GetPipelineStateOutput, __MetadataBearer {
}
/**
 * <p>Returns information about the state of a pipeline, including the stages and
 *             actions.</p>
 *         <note>
 *             <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code>
 *                 fields indicate the source revision information, such as the commit ID, for the
 *                 current state.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineStateCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineStateCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetPipelineStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineStateCommandInput} for command's `input` shape.
 * @see {@link GetPipelineStateCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPipelineStateCommand extends $Command<GetPipelineStateCommandInput, GetPipelineStateCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetPipelineStateCommandInput;
    constructor(input: GetPipelineStateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPipelineStateCommandInput, GetPipelineStateCommandOutput>;
    private serialize;
    private deserialize;
}
