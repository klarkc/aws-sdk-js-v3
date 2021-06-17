import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RegisterCertificateWithoutCARequest, RegisterCertificateWithoutCAResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterCertificateWithoutCACommandInput extends RegisterCertificateWithoutCARequest {
}
export interface RegisterCertificateWithoutCACommandOutput extends RegisterCertificateWithoutCAResponse, __MetadataBearer {
}
/**
 * <p>Register a certificate that does not have a certificate authority (CA).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCertificateWithoutCACommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCertificateWithoutCACommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCertificateWithoutCACommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCertificateWithoutCACommandInput} for command's `input` shape.
 * @see {@link RegisterCertificateWithoutCACommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterCertificateWithoutCACommand extends $Command<RegisterCertificateWithoutCACommandInput, RegisterCertificateWithoutCACommandOutput, IoTClientResolvedConfig> {
    readonly input: RegisterCertificateWithoutCACommandInput;
    constructor(input: RegisterCertificateWithoutCACommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterCertificateWithoutCACommandInput, RegisterCertificateWithoutCACommandOutput>;
    private serialize;
    private deserialize;
}
