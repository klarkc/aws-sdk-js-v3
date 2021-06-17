import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { StartGatewayInput, StartGatewayOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartGatewayCommandInput extends StartGatewayInput {
}
export interface StartGatewayCommandOutput extends StartGatewayOutput, __MetadataBearer {
}
/**
 * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>).
 *          After the gateway starts, you can then make other API calls, your applications can read
 *          from or write to the gateway's storage volumes and you will be able to take snapshot
 *          backups.</p>
 *
 *          <note>
 *             <p>When you make a request, you will get a 200 OK success response immediately. However,
 *             it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any
 *             additional API calls. For more information, see <a>ActivateGateway</a>.</p>
 *          </note>
 *
 *          <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new StartGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartGatewayCommandInput} for command's `input` shape.
 * @see {@link StartGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartGatewayCommand extends $Command<StartGatewayCommandInput, StartGatewayCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: StartGatewayCommandInput;
    constructor(input: StartGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartGatewayCommandInput, StartGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
