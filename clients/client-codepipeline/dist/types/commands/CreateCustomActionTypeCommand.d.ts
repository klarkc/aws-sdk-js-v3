import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { CreateCustomActionTypeInput, CreateCustomActionTypeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomActionTypeCommandInput extends CreateCustomActionTypeInput {
}
export interface CreateCustomActionTypeCommandOutput extends CreateCustomActionTypeOutput, __MetadataBearer {
}
/**
 * <p>Creates a new custom action that can be used in all pipelines associated with the
 *             AWS account. Only used for custom actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, CreateCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, CreateCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new CreateCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomActionTypeCommand extends $Command<CreateCustomActionTypeCommandInput, CreateCustomActionTypeCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: CreateCustomActionTypeCommandInput;
    constructor(input: CreateCustomActionTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomActionTypeCommandInput, CreateCustomActionTypeCommandOutput>;
    private serialize;
    private deserialize;
}
