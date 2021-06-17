import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { AcknowledgeJobInput, AcknowledgeJobOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcknowledgeJobCommandInput extends AcknowledgeJobInput {
}
export interface AcknowledgeJobCommandOutput extends AcknowledgeJobOutput, __MetadataBearer {
}
/**
 * <p>Returns information about a specified job and whether that job has been received by
 *             the job worker. Used for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new AcknowledgeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcknowledgeJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcknowledgeJobCommand extends $Command<AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: AcknowledgeJobCommandInput;
    constructor(input: AcknowledgeJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput>;
    private serialize;
    private deserialize;
}
