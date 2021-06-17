import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RegisterCertificateRequest, RegisterCertificateResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterCertificateCommandInput extends RegisterCertificateRequest {
}
export interface RegisterCertificateCommandOutput extends RegisterCertificateResponse, __MetadataBearer {
}
/**
 * <p>Registers a device certificate with AWS IoT. If you have more than one CA certificate
 *          that has the same subject field, you must specify the CA certificate that was used to sign
 *          the device certificate being registered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterCertificateCommand extends $Command<RegisterCertificateCommandInput, RegisterCertificateCommandOutput, IoTClientResolvedConfig> {
    readonly input: RegisterCertificateCommandInput;
    constructor(input: RegisterCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterCertificateCommandInput, RegisterCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
