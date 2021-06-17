import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeprecateSystemTemplateRequest, DeprecateSystemTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeprecateSystemTemplateCommandInput extends DeprecateSystemTemplateRequest {
}
export interface DeprecateSystemTemplateCommandOutput extends DeprecateSystemTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deprecates the specified system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeprecateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeprecateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new DeprecateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprecateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link DeprecateSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeprecateSystemTemplateCommand extends $Command<DeprecateSystemTemplateCommandInput, DeprecateSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: DeprecateSystemTemplateCommandInput;
    constructor(input: DeprecateSystemTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeprecateSystemTemplateCommandInput, DeprecateSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
