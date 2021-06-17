import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { ListActionTypesInput, ListActionTypesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListActionTypesCommandInput extends ListActionTypesInput {
}
export interface ListActionTypesCommandOutput extends ListActionTypesOutput, __MetadataBearer {
}
/**
 * <p>Gets a summary of all AWS CodePipeline action types associated with your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListActionTypesCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListActionTypesCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListActionTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActionTypesCommandInput} for command's `input` shape.
 * @see {@link ListActionTypesCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListActionTypesCommand extends $Command<ListActionTypesCommandInput, ListActionTypesCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: ListActionTypesCommandInput;
    constructor(input: ListActionTypesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActionTypesCommandInput, ListActionTypesCommandOutput>;
    private serialize;
    private deserialize;
}
