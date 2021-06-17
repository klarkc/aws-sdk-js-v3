import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCertificatesRequest, ListCertificatesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCertificatesCommandInput extends ListCertificatesRequest {
}
export interface ListCertificatesCommandOutput extends ListCertificatesResponse, __MetadataBearer {
}
/**
 * <p>Lists the certificates registered in your AWS account.</p>
 *          <p>The results are paginated with a default page size of 25. You can use the returned
 *          marker to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCertificatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCertificatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCertificatesCommand extends $Command<ListCertificatesCommandInput, ListCertificatesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListCertificatesCommandInput;
    constructor(input: ListCertificatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCertificatesCommandInput, ListCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
