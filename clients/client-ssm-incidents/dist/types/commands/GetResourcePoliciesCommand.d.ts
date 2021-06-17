import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { GetResourcePoliciesInput, GetResourcePoliciesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourcePoliciesCommandInput extends GetResourcePoliciesInput {
}
export interface GetResourcePoliciesCommandOutput extends GetResourcePoliciesOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the resource policies attached to the specified response plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetResourcePoliciesCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetResourcePoliciesCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new GetResourcePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcePoliciesCommandInput} for command's `input` shape.
 * @see {@link GetResourcePoliciesCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourcePoliciesCommand extends $Command<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput, SSMIncidentsClientResolvedConfig> {
    readonly input: GetResourcePoliciesCommandInput;
    constructor(input: GetResourcePoliciesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMIncidentsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourcePoliciesCommandInput, GetResourcePoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
