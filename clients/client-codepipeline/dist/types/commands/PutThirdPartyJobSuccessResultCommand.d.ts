import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutThirdPartyJobSuccessResultInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutThirdPartyJobSuccessResultCommandInput extends PutThirdPartyJobSuccessResultInput {
}
export interface PutThirdPartyJobSuccessResultCommandOutput extends __MetadataBearer {
}
/**
 * <p>Represents the success of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutThirdPartyJobSuccessResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutThirdPartyJobSuccessResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutThirdPartyJobSuccessResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutThirdPartyJobSuccessResultCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyJobSuccessResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutThirdPartyJobSuccessResultCommand extends $Command<PutThirdPartyJobSuccessResultCommandInput, PutThirdPartyJobSuccessResultCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PutThirdPartyJobSuccessResultCommandInput;
    constructor(input: PutThirdPartyJobSuccessResultCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutThirdPartyJobSuccessResultCommandInput, PutThirdPartyJobSuccessResultCommandOutput>;
    private serialize;
    private deserialize;
}
