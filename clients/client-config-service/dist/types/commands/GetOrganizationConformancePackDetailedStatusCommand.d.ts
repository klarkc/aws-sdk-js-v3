import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { GetOrganizationConformancePackDetailedStatusRequest, GetOrganizationConformancePackDetailedStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetOrganizationConformancePackDetailedStatusCommandInput extends GetOrganizationConformancePackDetailedStatusRequest {
}
export interface GetOrganizationConformancePackDetailedStatusCommandOutput extends GetOrganizationConformancePackDetailedStatusResponse, __MetadataBearer {
}
/**
 * <p>Returns detailed status for each member account within an organization for a given organization conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetOrganizationConformancePackDetailedStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new GetOrganizationConformancePackDetailedStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationConformancePackDetailedStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetOrganizationConformancePackDetailedStatusCommand extends $Command<GetOrganizationConformancePackDetailedStatusCommandInput, GetOrganizationConformancePackDetailedStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: GetOrganizationConformancePackDetailedStatusCommandInput;
    constructor(input: GetOrganizationConformancePackDetailedStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOrganizationConformancePackDetailedStatusCommandInput, GetOrganizationConformancePackDetailedStatusCommandOutput>;
    private serialize;
    private deserialize;
}
