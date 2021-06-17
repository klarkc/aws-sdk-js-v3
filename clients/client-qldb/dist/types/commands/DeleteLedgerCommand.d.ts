import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { DeleteLedgerRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLedgerCommandInput extends DeleteLedgerRequest {
}
export interface DeleteLedgerCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes a ledger and all of its contents. This action is irreversible.</p>
 *          <p>If deletion protection is enabled, you must first disable it before you can delete the
 *          ledger using the QLDB API or the AWS Command Line Interface (AWS CLI). You can disable it by calling the
 *             <code>UpdateLedger</code> operation to set the flag to <code>false</code>. The QLDB
 *          console disables deletion protection for you when you use it to delete a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DeleteLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DeleteLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DeleteLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLedgerCommandInput} for command's `input` shape.
 * @see {@link DeleteLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLedgerCommand extends $Command<DeleteLedgerCommandInput, DeleteLedgerCommandOutput, QLDBClientResolvedConfig> {
    readonly input: DeleteLedgerCommandInput;
    constructor(input: DeleteLedgerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLedgerCommandInput, DeleteLedgerCommandOutput>;
    private serialize;
    private deserialize;
}
