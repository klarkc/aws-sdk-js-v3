import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBProxiesRequest, DescribeDBProxiesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDBProxiesCommandInput extends DescribeDBProxiesRequest {
}
export interface DescribeDBProxiesCommandOutput extends DescribeDBProxiesResponse, __MetadataBearer {
}
/**
 * <p>Returns information about DB proxies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxiesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxiesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBProxiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBProxiesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxiesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDBProxiesCommand extends $Command<DescribeDBProxiesCommandInput, DescribeDBProxiesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBProxiesCommandInput;
    constructor(input: DescribeDBProxiesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBProxiesCommandInput, DescribeDBProxiesCommandOutput>;
    private serialize;
    private deserialize;
}
