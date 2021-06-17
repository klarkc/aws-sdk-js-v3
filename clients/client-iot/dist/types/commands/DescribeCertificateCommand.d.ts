import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeCertificateRequest, DescribeCertificateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCertificateCommandInput extends DescribeCertificateRequest {
}
export interface DescribeCertificateCommandOutput extends DescribeCertificateResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the specified certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCertificateCommand extends $Command<DescribeCertificateCommandInput, DescribeCertificateCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeCertificateCommandInput;
    constructor(input: DescribeCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCertificateCommandInput, DescribeCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
