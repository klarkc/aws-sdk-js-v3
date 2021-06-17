import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateBaiduChannelRequest, UpdateBaiduChannelResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateBaiduChannelCommandInput extends UpdateBaiduChannelRequest {
}
export interface UpdateBaiduChannelCommandOutput extends UpdateBaiduChannelResponse, __MetadataBearer {
}
/**
 * <p>Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateBaiduChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateBaiduChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateBaiduChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateBaiduChannelCommand extends $Command<UpdateBaiduChannelCommandInput, UpdateBaiduChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateBaiduChannelCommandInput;
    constructor(input: UpdateBaiduChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBaiduChannelCommandInput, UpdateBaiduChannelCommandOutput>;
    private serialize;
    private deserialize;
}
