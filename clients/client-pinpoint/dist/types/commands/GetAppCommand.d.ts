import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetAppRequest, GetAppResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAppCommandInput extends GetAppRequest {
}
export interface GetAppCommandOutput extends GetAppResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetAppCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetAppCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppCommandInput} for command's `input` shape.
 * @see {@link GetAppCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppCommand extends $Command<GetAppCommandInput, GetAppCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetAppCommandInput;
    constructor(input: GetAppCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppCommandInput, GetAppCommandOutput>;
    private serialize;
    private deserialize;
}
