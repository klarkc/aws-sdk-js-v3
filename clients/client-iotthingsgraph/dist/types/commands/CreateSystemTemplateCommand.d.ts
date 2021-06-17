import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateSystemTemplateRequest, CreateSystemTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSystemTemplateCommandInput extends CreateSystemTemplateRequest {
}
export interface CreateSystemTemplateCommandOutput extends CreateSystemTemplateResponse, __MetadataBearer {
}
/**
 * <p>Creates a system. The system is validated against the entities in the
 *          latest version of the user's namespace unless another namespace version is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new CreateSystemTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSystemTemplateCommand extends $Command<CreateSystemTemplateCommandInput, CreateSystemTemplateCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: CreateSystemTemplateCommandInput;
    constructor(input: CreateSystemTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSystemTemplateCommandInput, CreateSystemTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
