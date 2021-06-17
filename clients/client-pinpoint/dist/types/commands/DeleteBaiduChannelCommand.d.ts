import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteBaiduChannelRequest, DeleteBaiduChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBaiduChannelCommandInput extends DeleteBaiduChannelRequest {
}
export interface DeleteBaiduChannelCommandOutput extends DeleteBaiduChannelResponse, __MetadataBearer {
}
/**
 * <p>Disables the Baidu channel for an application and deletes any existing settings for the channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteBaiduChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteBaiduChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteBaiduChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBaiduChannelCommand extends $Command<DeleteBaiduChannelCommandInput, DeleteBaiduChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: DeleteBaiduChannelCommandInput;
    constructor(input: DeleteBaiduChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBaiduChannelCommandInput, DeleteBaiduChannelCommandOutput>;
    private serialize;
    private deserialize;
}
