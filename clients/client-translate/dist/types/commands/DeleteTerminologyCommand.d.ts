import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { DeleteTerminologyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTerminologyCommandInput extends DeleteTerminologyRequest {
}
export interface DeleteTerminologyCommandOutput extends __MetadataBearer {
}
/**
 * <p>A synchronous action that deletes a custom terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, DeleteTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, DeleteTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new DeleteTerminologyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTerminologyCommandInput} for command's `input` shape.
 * @see {@link DeleteTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTerminologyCommand extends $Command<DeleteTerminologyCommandInput, DeleteTerminologyCommandOutput, TranslateClientResolvedConfig> {
    readonly input: DeleteTerminologyCommandInput;
    constructor(input: DeleteTerminologyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTerminologyCommandInput, DeleteTerminologyCommandOutput>;
    private serialize;
    private deserialize;
}
