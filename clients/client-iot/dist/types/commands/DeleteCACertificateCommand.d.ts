import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteCACertificateRequest, DeleteCACertificateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCACertificateCommandInput extends DeleteCACertificateRequest {
}
export interface DeleteCACertificateCommandOutput extends DeleteCACertificateResponse, __MetadataBearer {
}
/**
 * <p>Deletes a registered CA certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCACertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCACertificateCommand extends $Command<DeleteCACertificateCommandInput, DeleteCACertificateCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteCACertificateCommandInput;
    constructor(input: DeleteCACertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCACertificateCommandInput, DeleteCACertificateCommandOutput>;
    private serialize;
    private deserialize;
}
