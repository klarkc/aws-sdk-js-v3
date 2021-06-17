import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetBaiduChannelRequest, GetBaiduChannelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBaiduChannelCommandInput extends GetBaiduChannelRequest {
}
export interface GetBaiduChannelCommandOutput extends GetBaiduChannelResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the status and settings of the Baidu channel for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetBaiduChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetBaiduChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetBaiduChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBaiduChannelCommandInput} for command's `input` shape.
 * @see {@link GetBaiduChannelCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBaiduChannelCommand extends $Command<GetBaiduChannelCommandInput, GetBaiduChannelCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetBaiduChannelCommandInput;
    constructor(input: GetBaiduChannelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBaiduChannelCommandInput, GetBaiduChannelCommandOutput>;
    private serialize;
    private deserialize;
}
