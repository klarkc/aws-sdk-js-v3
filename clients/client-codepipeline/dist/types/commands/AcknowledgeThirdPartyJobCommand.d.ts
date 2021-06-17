import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcknowledgeThirdPartyJobCommandInput extends AcknowledgeThirdPartyJobInput {
}
export interface AcknowledgeThirdPartyJobCommandOutput extends AcknowledgeThirdPartyJobOutput, __MetadataBearer {
}
/**
 * <p>Confirms a job worker has received the specified job. Used for partner actions
 *             only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeThirdPartyJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeThirdPartyJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new AcknowledgeThirdPartyJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcknowledgeThirdPartyJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeThirdPartyJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcknowledgeThirdPartyJobCommand extends $Command<AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: AcknowledgeThirdPartyJobCommandInput;
    constructor(input: AcknowledgeThirdPartyJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput>;
    private serialize;
    private deserialize;
}
