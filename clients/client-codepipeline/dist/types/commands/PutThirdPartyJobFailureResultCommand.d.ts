import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutThirdPartyJobFailureResultInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutThirdPartyJobFailureResultCommandInput extends PutThirdPartyJobFailureResultInput {
}
export interface PutThirdPartyJobFailureResultCommandOutput extends __MetadataBearer {
}
/**
 * <p>Represents the failure of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutThirdPartyJobFailureResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutThirdPartyJobFailureResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutThirdPartyJobFailureResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutThirdPartyJobFailureResultCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyJobFailureResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutThirdPartyJobFailureResultCommand extends $Command<PutThirdPartyJobFailureResultCommandInput, PutThirdPartyJobFailureResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutThirdPartyJobFailureResultCommandInput;
    constructor(input: PutThirdPartyJobFailureResultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutThirdPartyJobFailureResultCommandInput, PutThirdPartyJobFailureResultCommandOutput>;
    private serialize;
    private deserialize;
}
