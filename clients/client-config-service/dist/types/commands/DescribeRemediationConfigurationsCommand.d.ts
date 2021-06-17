import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeRemediationConfigurationsRequest, DescribeRemediationConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRemediationConfigurationsCommandInput extends DescribeRemediationConfigurationsRequest {
}
export interface DescribeRemediationConfigurationsCommandOutput extends DescribeRemediationConfigurationsResponse, __MetadataBearer {
}
/**
 * <p>Returns the details of one or more remediation configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRemediationConfigurationsCommand extends $Command<DescribeRemediationConfigurationsCommandInput, DescribeRemediationConfigurationsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeRemediationConfigurationsCommandInput;
    constructor(input: DescribeRemediationConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRemediationConfigurationsCommandInput, DescribeRemediationConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
