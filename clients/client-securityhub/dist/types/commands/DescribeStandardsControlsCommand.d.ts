import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DescribeStandardsControlsRequest, DescribeStandardsControlsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeStandardsControlsCommandInput extends DescribeStandardsControlsRequest {
}
export interface DescribeStandardsControlsCommandOutput extends DescribeStandardsControlsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of security standards controls.</p>
 *          <p>For each control, the results include information about whether it is currently enabled,
 *          the severity, and a link to remediation information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeStandardsControlsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeStandardsControlsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeStandardsControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStandardsControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeStandardsControlsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeStandardsControlsCommand extends $Command<DescribeStandardsControlsCommandInput, DescribeStandardsControlsCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DescribeStandardsControlsCommandInput;
    constructor(input: DescribeStandardsControlsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStandardsControlsCommandInput, DescribeStandardsControlsCommandOutput>;
    private serialize;
    private deserialize;
}
