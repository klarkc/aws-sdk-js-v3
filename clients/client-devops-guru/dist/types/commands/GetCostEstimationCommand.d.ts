import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { GetCostEstimationRequest, GetCostEstimationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCostEstimationCommandInput extends GetCostEstimationRequest {
}
export interface GetCostEstimationCommandOutput extends GetCostEstimationResponse, __MetadataBearer {
}
/**
 * <p>Returns an estimate of the monthly cost for DevOps Guru to analyze your AWS resources.
 * 			For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, GetCostEstimationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, GetCostEstimationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new GetCostEstimationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostEstimationCommandInput} for command's `input` shape.
 * @see {@link GetCostEstimationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCostEstimationCommand extends $Command<GetCostEstimationCommandInput, GetCostEstimationCommandOutput, DevOpsGuruClientResolvedConfig> {
    readonly input: GetCostEstimationCommandInput;
    constructor(input: GetCostEstimationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DevOpsGuruClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCostEstimationCommandInput, GetCostEstimationCommandOutput>;
    private serialize;
    private deserialize;
}
