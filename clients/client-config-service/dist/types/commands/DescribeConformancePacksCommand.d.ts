import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConformancePacksRequest, DescribeConformancePacksResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConformancePacksCommandInput extends DescribeConformancePacksRequest {
}
export interface DescribeConformancePacksCommandOutput extends DescribeConformancePacksResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of one or more conformance packs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConformancePacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConformancePacksCommand extends $Command<DescribeConformancePacksCommandInput, DescribeConformancePacksCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConformancePacksCommandInput;
    constructor(input: DescribeConformancePacksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConformancePacksCommandInput, DescribeConformancePacksCommandOutput>;
    private serialize;
    private deserialize;
}
