import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteReceiptFilterRequest, DeleteReceiptFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReceiptFilterCommandInput extends DeleteReceiptFilterRequest {
}
export interface DeleteReceiptFilterCommandOutput extends DeleteReceiptFilterResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified IP address filter.</p>
 *         <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteReceiptFilterCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteReceiptFilterCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new DeleteReceiptFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReceiptFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteReceiptFilterCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReceiptFilterCommand extends $Command<DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteReceiptFilterCommandInput;
    constructor(input: DeleteReceiptFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput>;
    private serialize;
    private deserialize;
}
