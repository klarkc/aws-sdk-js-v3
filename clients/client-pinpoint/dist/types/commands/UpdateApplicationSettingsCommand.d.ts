import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { UpdateApplicationSettingsRequest, UpdateApplicationSettingsResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateApplicationSettingsCommandInput extends UpdateApplicationSettingsRequest {
}
export interface UpdateApplicationSettingsCommandOutput extends UpdateApplicationSettingsResponse, __MetadataBearer {
}
/**
 * <p>Updates the settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApplicationSettingsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApplicationSettingsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new UpdateApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationSettingsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateApplicationSettingsCommand extends $Command<UpdateApplicationSettingsCommandInput, UpdateApplicationSettingsCommandOutput, PinpointClientResolvedConfig> {
    readonly input: UpdateApplicationSettingsCommandInput;
    constructor(input: UpdateApplicationSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApplicationSettingsCommandInput, UpdateApplicationSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
