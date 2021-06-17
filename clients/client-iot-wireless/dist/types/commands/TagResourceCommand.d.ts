import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagResourceCommandInput extends TagResourceRequest {
}
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {
}
/**
 * <p>Adds a tag to a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, TagResourceCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, TagResourceCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagResourceCommand extends $Command<TagResourceCommandInput, TagResourceCommandOutput, IoTWirelessClientResolvedConfig> {
    readonly input: TagResourceCommandInput;
    constructor(input: TagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTWirelessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagResourceCommandInput, TagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
