import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeInterconnectsRequest, Interconnects } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInterconnectsCommandInput extends DescribeInterconnectsRequest {
}
export interface DescribeInterconnectsCommandOutput extends Interconnects, __MetadataBearer {
}
/**
 * <p>Lists the interconnects owned by the AWS account or only the specified interconnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeInterconnectsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeInterconnectsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeInterconnectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInterconnectsCommandInput} for command's `input` shape.
 * @see {@link DescribeInterconnectsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInterconnectsCommand extends $Command<DescribeInterconnectsCommandInput, DescribeInterconnectsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeInterconnectsCommandInput;
    constructor(input: DescribeInterconnectsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInterconnectsCommandInput, DescribeInterconnectsCommandOutput>;
    private serialize;
    private deserialize;
}
