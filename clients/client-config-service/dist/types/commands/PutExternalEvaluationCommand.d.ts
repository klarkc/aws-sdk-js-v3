import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutExternalEvaluationRequest, PutExternalEvaluationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutExternalEvaluationCommandInput extends PutExternalEvaluationRequest {
}
export interface PutExternalEvaluationCommandOutput extends PutExternalEvaluationResponse, __MetadataBearer {
}
/**
 * <p>Add or updates the evaluations for process checks.
 * 			This API checks if the rule is a process check when the name of the AWS Config rule is provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutExternalEvaluationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutExternalEvaluationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutExternalEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutExternalEvaluationCommandInput} for command's `input` shape.
 * @see {@link PutExternalEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutExternalEvaluationCommand extends $Command<PutExternalEvaluationCommandInput, PutExternalEvaluationCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutExternalEvaluationCommandInput;
    constructor(input: PutExternalEvaluationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutExternalEvaluationCommandInput, PutExternalEvaluationCommandOutput>;
    private serialize;
    private deserialize;
}
