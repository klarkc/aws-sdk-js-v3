import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetThirdPartyJobDetailsInput, GetThirdPartyJobDetailsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetThirdPartyJobDetailsCommandInput extends GetThirdPartyJobDetailsInput {
}
export interface GetThirdPartyJobDetailsCommandOutput extends GetThirdPartyJobDetailsOutput, __MetadataBearer {
}
/**
 * <p>Requests the details of a job for a third party action. Used for partner actions
 *             only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetThirdPartyJobDetailsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetThirdPartyJobDetailsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetThirdPartyJobDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThirdPartyJobDetailsCommandInput} for command's `input` shape.
 * @see {@link GetThirdPartyJobDetailsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetThirdPartyJobDetailsCommand extends $Command<GetThirdPartyJobDetailsCommandInput, GetThirdPartyJobDetailsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: GetThirdPartyJobDetailsCommandInput;
    constructor(input: GetThirdPartyJobDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetThirdPartyJobDetailsCommandInput, GetThirdPartyJobDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
