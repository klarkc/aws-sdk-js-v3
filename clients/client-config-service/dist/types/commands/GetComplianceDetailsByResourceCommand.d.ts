import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetComplianceDetailsByResourceRequest, GetComplianceDetailsByResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetComplianceDetailsByResourceCommandInput extends GetComplianceDetailsByResourceRequest {
}
export interface GetComplianceDetailsByResourceCommandOutput extends GetComplianceDetailsByResourceResponse, __MetadataBearer {
}
/**
 * <p>Returns the evaluation results for the specified AWS resource.
 * 			The results indicate which AWS Config rules were used to evaluate
 * 			the resource, when each rule was last used, and whether the resource
 * 			complies with each rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceDetailsByResourceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceDetailsByResourceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetComplianceDetailsByResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComplianceDetailsByResourceCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailsByResourceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetComplianceDetailsByResourceCommand extends $Command<GetComplianceDetailsByResourceCommandInput, GetComplianceDetailsByResourceCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetComplianceDetailsByResourceCommandInput;
    constructor(input: GetComplianceDetailsByResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetComplianceDetailsByResourceCommandInput, GetComplianceDetailsByResourceCommandOutput>;
    private serialize;
    private deserialize;
}
