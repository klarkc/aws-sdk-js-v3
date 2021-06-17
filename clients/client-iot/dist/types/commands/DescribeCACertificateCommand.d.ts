import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeCACertificateRequest, DescribeCACertificateResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCACertificateCommandInput extends DescribeCACertificateRequest {
}
export interface DescribeCACertificateCommandOutput extends DescribeCACertificateResponse, __MetadataBearer {
}
/**
 * <p>Describes a registered CA certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCACertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCACertificateCommand extends $Command<DescribeCACertificateCommandInput, DescribeCACertificateCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeCACertificateCommandInput;
    constructor(input: DescribeCACertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCACertificateCommandInput, DescribeCACertificateCommandOutput>;
    private serialize;
    private deserialize;
}
