import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteJobTemplateRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteJobTemplateCommandInput extends DeleteJobTemplateRequest {
}
export interface DeleteJobTemplateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified job template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteJobTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteJobTemplateCommand extends $Command<DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteJobTemplateCommandInput;
    constructor(input: DeleteJobTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteJobTemplateCommandInput, DeleteJobTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
