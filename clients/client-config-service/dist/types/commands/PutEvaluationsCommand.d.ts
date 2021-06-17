import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutEvaluationsRequest, PutEvaluationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutEvaluationsCommandInput extends PutEvaluationsRequest {
}
export interface PutEvaluationsCommandOutput extends PutEvaluationsResponse, __MetadataBearer {
}
/**
 * <p>Used by an AWS Lambda function to deliver evaluation results to
 * 			AWS Config. This action is required in every AWS Lambda function
 * 			that is invoked by an AWS Config rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutEvaluationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutEvaluationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutEvaluationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutEvaluationsCommandInput} for command's `input` shape.
 * @see {@link PutEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutEvaluationsCommand extends $Command<PutEvaluationsCommandInput, PutEvaluationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutEvaluationsCommandInput;
    constructor(input: PutEvaluationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEvaluationsCommandInput, PutEvaluationsCommandOutput>;
    private serialize;
    private deserialize;
}
