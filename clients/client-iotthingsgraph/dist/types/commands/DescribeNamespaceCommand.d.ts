import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DescribeNamespaceRequest, DescribeNamespaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNamespaceCommandInput extends DescribeNamespaceRequest {
}
export interface DescribeNamespaceCommandOutput extends DescribeNamespaceResponse, __MetadataBearer {
}
/**
 * <p>Gets the latest version of the user's namespace and the public version that it is tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DescribeNamespaceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DescribeNamespaceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DescribeNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNamespaceCommandInput} for command's `input` shape.
 * @see {@link DescribeNamespaceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNamespaceCommand extends $Command<DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DescribeNamespaceCommandInput;
    constructor(input: DescribeNamespaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNamespaceCommandInput, DescribeNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
