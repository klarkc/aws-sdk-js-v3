import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetApplicationSettingsRequest, GetApplicationSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetApplicationSettingsCommandInput extends GetApplicationSettingsRequest {
}
export interface GetApplicationSettingsCommandOutput extends GetApplicationSettingsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about the settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApplicationSettingsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApplicationSettingsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link GetApplicationSettingsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetApplicationSettingsCommand extends $Command<GetApplicationSettingsCommandInput, GetApplicationSettingsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: GetApplicationSettingsCommandInput;
    constructor(input: GetApplicationSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApplicationSettingsCommandInput, GetApplicationSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
