import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetConformancePackComplianceDetailsRequest, GetConformancePackComplianceDetailsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetConformancePackComplianceDetailsCommandInput extends GetConformancePackComplianceDetailsRequest {
}
export interface GetConformancePackComplianceDetailsCommandOutput extends GetConformancePackComplianceDetailsResponse, __MetadataBearer {
}
/**
 * <p>Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceDetailsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetConformancePackComplianceDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConformancePackComplianceDetailsCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceDetailsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetConformancePackComplianceDetailsCommand extends $Command<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetConformancePackComplianceDetailsCommandInput;
    constructor(input: GetConformancePackComplianceDetailsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConformancePackComplianceDetailsCommandInput, GetConformancePackComplianceDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
