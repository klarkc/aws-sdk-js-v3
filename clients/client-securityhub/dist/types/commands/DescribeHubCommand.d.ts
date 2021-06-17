import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { DescribeHubRequest, DescribeHubResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeHubCommandInput extends DescribeHubRequest {
}
export interface DescribeHubCommandOutput extends DescribeHubResponse, __MetadataBearer {
}
/**
 * <p>Returns details about the Hub resource in your account, including the
 *             <code>HubArn</code> and the time when you enabled Security Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeHubCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeHubCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DescribeHubCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHubCommandInput} for command's `input` shape.
 * @see {@link DescribeHubCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeHubCommand extends $Command<DescribeHubCommandInput, DescribeHubCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: DescribeHubCommandInput;
    constructor(input: DescribeHubCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHubCommandInput, DescribeHubCommandOutput>;
    private serialize;
    private deserialize;
}
