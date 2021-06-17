import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateCACertificateRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCACertificateCommandInput extends UpdateCACertificateRequest {
}
export interface UpdateCACertificateCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates a registered CA certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCACertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCACertificateCommand extends $Command<UpdateCACertificateCommandInput, UpdateCACertificateCommandOutput, IoTClientResolvedConfig> {
    readonly input: UpdateCACertificateCommandInput;
    constructor(input: UpdateCACertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCACertificateCommandInput, UpdateCACertificateCommandOutput>;
    private serialize;
    private deserialize;
}
