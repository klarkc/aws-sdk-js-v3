import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { GetResponsePlanInput, GetResponsePlanOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResponsePlanCommandInput extends GetResponsePlanInput {
}
export interface GetResponsePlanCommandOutput extends GetResponsePlanOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the details of the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResponsePlanCommandInput} for command's `input` shape.
 * @see {@link GetResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResponsePlanCommand extends $Command<GetResponsePlanCommandInput, GetResponsePlanCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: GetResponsePlanCommandInput;
    constructor(input: GetResponsePlanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResponsePlanCommandInput, GetResponsePlanCommandOutput>;
    private serialize;
    private deserialize;
}
