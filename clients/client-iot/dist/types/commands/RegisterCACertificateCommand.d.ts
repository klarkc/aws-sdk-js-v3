import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RegisterCACertificateRequest, RegisterCACertificateResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterCACertificateCommandInput extends RegisterCACertificateRequest {
}
export interface RegisterCACertificateCommandOutput extends RegisterCACertificateResponse, __MetadataBearer {
}
/**
 * <p>Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign
 *          device certificates, which can be then registered with AWS IoT. You can register up to 10
 *          CA certificates per AWS account that have the same subject field. This enables you to have
 *          up to 10 certificate authorities sign your device certificates. If you have more than one
 *          CA certificate registered, make sure you pass the CA certificate when you register your
 *          device certificates with the RegisterCertificate API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCACertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterCACertificateCommand extends $Command<RegisterCACertificateCommandInput, RegisterCACertificateCommandOutput, IoTClientResolvedConfig> {
    readonly input: RegisterCACertificateCommandInput;
    constructor(input: RegisterCACertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterCACertificateCommandInput, RegisterCACertificateCommandOutput>;
    private serialize;
    private deserialize;
}
