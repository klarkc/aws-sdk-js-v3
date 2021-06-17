import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetActionTypeInput, GetActionTypeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetActionTypeCommandInput extends GetActionTypeInput {
}
export interface GetActionTypeCommandOutput extends GetActionTypeOutput, __MetadataBearer {
}
/**
 * <p>Returns information about an action type created for an external provider, where the
 *             action is to be used by customers of the external provider. The action can be created
 *             with any supported integration model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetActionTypeCommandInput} for command's `input` shape.
 * @see {@link GetActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetActionTypeCommand extends $Command<GetActionTypeCommandInput, GetActionTypeCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetActionTypeCommandInput;
    constructor(input: GetActionTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetActionTypeCommandInput, GetActionTypeCommandOutput>;
    private serialize;
    private deserialize;
}
