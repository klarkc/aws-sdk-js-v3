import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListOutgoingCertificatesRequest, ListOutgoingCertificatesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListOutgoingCertificatesCommandInput extends ListOutgoingCertificatesRequest {
}
export interface ListOutgoingCertificatesCommandOutput extends ListOutgoingCertificatesResponse, __MetadataBearer {
}
/**
 * <p>Lists certificates that are being transferred but not yet accepted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListOutgoingCertificatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListOutgoingCertificatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListOutgoingCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOutgoingCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListOutgoingCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListOutgoingCertificatesCommand extends $Command<ListOutgoingCertificatesCommandInput, ListOutgoingCertificatesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListOutgoingCertificatesCommandInput;
    constructor(input: ListOutgoingCertificatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOutgoingCertificatesCommandInput, ListOutgoingCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
