import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteServerCatalogRequest, DeleteServerCatalogResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteServerCatalogCommandInput extends DeleteServerCatalogRequest {
}
export interface DeleteServerCatalogCommandOutput extends DeleteServerCatalogResponse, __MetadataBearer {
}
/**
 * <p>Deletes all servers from your server catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteServerCatalogCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteServerCatalogCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteServerCatalogCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServerCatalogCommandInput} for command's `input` shape.
 * @see {@link DeleteServerCatalogCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteServerCatalogCommand extends $Command<DeleteServerCatalogCommandInput, DeleteServerCatalogCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteServerCatalogCommandInput;
    constructor(input: DeleteServerCatalogCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServerCatalogCommandInput, DeleteServerCatalogCommandOutput>;
    private serialize;
    private deserialize;
}
