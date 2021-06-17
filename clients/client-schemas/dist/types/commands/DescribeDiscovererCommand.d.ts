import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { DescribeDiscovererRequest, DescribeDiscovererResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDiscovererCommandInput extends DescribeDiscovererRequest {
}
export interface DescribeDiscovererCommandOutput extends DescribeDiscovererResponse, __MetadataBearer {
}
/**
 * <p>Describes the discoverer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new DescribeDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDiscovererCommandInput} for command's `input` shape.
 * @see {@link DescribeDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDiscovererCommand extends $Command<DescribeDiscovererCommandInput, DescribeDiscovererCommandOutput, SchemasClientResolvedConfig> {
    readonly input: DescribeDiscovererCommandInput;
    constructor(input: DescribeDiscovererCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SchemasClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDiscovererCommandInput, DescribeDiscovererCommandOutput>;
    private serialize;
    private deserialize;
}
