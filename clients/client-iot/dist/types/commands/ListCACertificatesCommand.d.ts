import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCACertificatesRequest, ListCACertificatesResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCACertificatesCommandInput extends ListCACertificatesRequest {
}
export interface ListCACertificatesCommandOutput extends ListCACertificatesResponse, __MetadataBearer {
}
/**
 * <p>Lists the CA certificates registered for your AWS account.</p>
 *          <p>The results are paginated with a default page size of 25. You can use the returned
 *          marker to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCACertificatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCACertificatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListCACertificatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCACertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCACertificatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCACertificatesCommand extends $Command<ListCACertificatesCommandInput, ListCACertificatesCommandOutput, IoTClientResolvedConfig> {
    readonly input: ListCACertificatesCommandInput;
    constructor(input: ListCACertificatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCACertificatesCommandInput, ListCACertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
