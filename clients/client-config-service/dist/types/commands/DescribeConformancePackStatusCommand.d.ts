import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConformancePackStatusRequest, DescribeConformancePackStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeConformancePackStatusCommandInput extends DescribeConformancePackStatusRequest {
}
export interface DescribeConformancePackStatusCommandOutput extends DescribeConformancePackStatusResponse, __MetadataBearer {
}
/**
 * <p>Provides one or more conformance packs deployment status.</p>
 * 		       <note>
 *             <p>If there are no conformance packs then you will see an empty result.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConformancePackStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConformancePackStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeConformancePackStatusCommand extends $Command<DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeConformancePackStatusCommandInput;
    constructor(input: DescribeConformancePackStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConformancePackStatusCommandInput, DescribeConformancePackStatusCommandOutput>;
    private serialize;
    private deserialize;
}
