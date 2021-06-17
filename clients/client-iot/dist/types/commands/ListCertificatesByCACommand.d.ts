import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCertificatesByCARequest, ListCertificatesByCAResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCertificatesByCACommandInput extends ListCertificatesByCARequest {
}
export interface ListCertificatesByCACommandOutput extends ListCertificatesByCAResponse, __MetadataBearer {
}
/**
 * <p>List the device certificates signed by the specified CA certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCertificatesByCACommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCertificatesByCACommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListCertificatesByCACommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificatesByCACommandInput} for command's `input` shape.
 * @see {@link ListCertificatesByCACommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCertificatesByCACommand extends $Command<ListCertificatesByCACommandInput, ListCertificatesByCACommandOutput, IoTClientResolvedConfig> {
    readonly input: ListCertificatesByCACommandInput;
    constructor(input: ListCertificatesByCACommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCertificatesByCACommandInput, ListCertificatesByCACommandOutput>;
    private serialize;
    private deserialize;
}
