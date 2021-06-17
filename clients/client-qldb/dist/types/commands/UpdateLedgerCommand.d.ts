import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { UpdateLedgerRequest, UpdateLedgerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLedgerCommandInput extends UpdateLedgerRequest {
}
export interface UpdateLedgerCommandOutput extends UpdateLedgerResponse, __MetadataBearer {
}
/**
 * <p>Updates properties on a ledger.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, UpdateLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, UpdateLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new UpdateLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLedgerCommandInput} for command's `input` shape.
 * @see {@link UpdateLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLedgerCommand extends $Command<UpdateLedgerCommandInput, UpdateLedgerCommandOutput, QLDBClientResolvedConfig> {
    readonly input: UpdateLedgerCommandInput;
    constructor(input: UpdateLedgerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLedgerCommandInput, UpdateLedgerCommandOutput>;
    private serialize;
    private deserialize;
}
