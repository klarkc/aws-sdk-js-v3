import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConformancePackComplianceRequest, DescribeConformancePackComplianceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConformancePackComplianceCommandInput extends DescribeConformancePackComplianceRequest {
}
export interface DescribeConformancePackComplianceCommandOutput extends DescribeConformancePackComplianceResponse, __MetadataBearer {
}
/**
 * <p>Returns compliance details for each rule in that conformance pack.</p>
 * 		       <note>
 *             <p>You must provide exact rule names.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackComplianceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackComplianceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConformancePackComplianceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConformancePackComplianceCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackComplianceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConformancePackComplianceCommand extends $Command<DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConformancePackComplianceCommandInput;
    constructor(input: DescribeConformancePackComplianceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput>;
    private serialize;
    private deserialize;
}
