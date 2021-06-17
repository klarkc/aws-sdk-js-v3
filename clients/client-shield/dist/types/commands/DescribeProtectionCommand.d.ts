import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeProtectionRequest, DescribeProtectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProtectionCommandInput extends DescribeProtectionRequest {
}
export interface DescribeProtectionCommandOutput extends DescribeProtectionResponse, __MetadataBearer {
}
/**
 * <p>Lists the details of a <a>Protection</a> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeProtectionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DescribeProtectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProtectionCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProtectionCommand extends $Command<DescribeProtectionCommandInput, DescribeProtectionCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeProtectionCommandInput;
    constructor(input: DescribeProtectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProtectionCommandInput, DescribeProtectionCommandOutput>;
    private serialize;
    private deserialize;
}
