import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DeleteAccessRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccessCommandInput extends DeleteAccessRequest {
}
export interface DeleteAccessCommandOutput extends __MetadataBearer {
}
/**
 * <p>Allows you to delete the access specified in the <code>ServerID</code> and
 *       <code>ExternalID</code> parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DeleteAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccessCommand extends $Command<DeleteAccessCommandInput, DeleteAccessCommandOutput, TransferClientResolvedConfig> {
    readonly input: DeleteAccessCommandInput;
    constructor(input: DeleteAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccessCommandInput, DeleteAccessCommandOutput>;
    private serialize;
    private deserialize;
}
