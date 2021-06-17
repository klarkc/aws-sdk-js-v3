import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeGatewayRequest, DescribeGatewayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGatewayCommandInput extends DescribeGatewayRequest {
}
export interface DescribeGatewayCommandOutput extends DescribeGatewayResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeGatewayCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeGatewayCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGatewayCommand extends $Command<DescribeGatewayCommandInput, DescribeGatewayCommandOutput, IoTSiteWiseClientResolvedConfig> {
    readonly input: DescribeGatewayCommandInput;
    constructor(input: DescribeGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTSiteWiseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGatewayCommandInput, DescribeGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
