import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeOrganizationConformancePackStatusesRequest, DescribeOrganizationConformancePackStatusesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeOrganizationConformancePackStatusesCommandInput extends DescribeOrganizationConformancePackStatusesRequest {
}
export interface DescribeOrganizationConformancePackStatusesCommandOutput extends DescribeOrganizationConformancePackStatusesResponse, __MetadataBearer {
}
/**
 * <p>Provides organization conformance pack deployment status for an organization. </p>
 * 		       <note>
 * 			         <p>The status is not considered successful until organization conformance pack is successfully
 * 				deployed in all the member accounts with an exception of excluded accounts.</p>
 * 			         <p>When you specify the limit and the next token, you receive a paginated response.
 * 				Limit and next token are not applicable if you specify organization conformance pack names.
 * 				They are only applicable, when you request all the organization conformance packs.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConformancePackStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeOrganizationConformancePackStatusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrganizationConformancePackStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConformancePackStatusesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeOrganizationConformancePackStatusesCommand extends $Command<DescribeOrganizationConformancePackStatusesCommandInput, DescribeOrganizationConformancePackStatusesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeOrganizationConformancePackStatusesCommandInput;
    constructor(input: DescribeOrganizationConformancePackStatusesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationConformancePackStatusesCommandInput, DescribeOrganizationConformancePackStatusesCommandOutput>;
    private serialize;
    private deserialize;
}
