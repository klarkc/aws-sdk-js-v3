import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeInterconnectLoaRequest, DescribeInterconnectLoaResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInterconnectLoaCommandInput extends DescribeInterconnectLoaRequest {
}
export interface DescribeInterconnectLoaCommandOutput extends DescribeInterconnectLoaResponse, __MetadataBearer {
}
/**
 * @deprecated
 *
 * <p>Deprecated. Use <a>DescribeLoa</a> instead.</p>
 *          <p>Gets the LOA-CFA for the specified interconnect.</p>
 *          <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to AWS at the colocation facility.
 *       For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at AWS Direct Connect Locations</a>
 *       in the <i>AWS Direct Connect User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeInterconnectLoaCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeInterconnectLoaCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeInterconnectLoaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInterconnectLoaCommandInput} for command's `input` shape.
 * @see {@link DescribeInterconnectLoaCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInterconnectLoaCommand extends $Command<DescribeInterconnectLoaCommandInput, DescribeInterconnectLoaCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeInterconnectLoaCommandInput;
    constructor(input: DescribeInterconnectLoaCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInterconnectLoaCommandInput, DescribeInterconnectLoaCommandOutput>;
    private serialize;
    private deserialize;
}
