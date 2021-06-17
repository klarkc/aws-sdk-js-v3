import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteEvaluationResultsRequest, DeleteEvaluationResultsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteEvaluationResultsCommandInput extends DeleteEvaluationResultsRequest {
}
export interface DeleteEvaluationResultsCommandOutput extends DeleteEvaluationResultsResponse, __MetadataBearer {
}
/**
 * <p>Deletes the evaluation results for the specified AWS Config
 * 			rule. You can specify one AWS Config rule per request. After you
 * 			delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating
 * 			your AWS resources against the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteEvaluationResultsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteEvaluationResultsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteEvaluationResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEvaluationResultsCommandInput} for command's `input` shape.
 * @see {@link DeleteEvaluationResultsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteEvaluationResultsCommand extends $Command<DeleteEvaluationResultsCommandInput, DeleteEvaluationResultsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteEvaluationResultsCommandInput;
    constructor(input: DeleteEvaluationResultsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEvaluationResultsCommandInput, DeleteEvaluationResultsCommandOutput>;
    private serialize;
    private deserialize;
}
