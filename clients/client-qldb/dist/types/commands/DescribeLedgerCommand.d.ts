import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { DescribeLedgerRequest, DescribeLedgerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLedgerCommandInput extends DescribeLedgerRequest {
}
export interface DescribeLedgerCommandOutput extends DescribeLedgerResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a ledger, including its state and when it was created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, DescribeLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, DescribeLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new DescribeLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLedgerCommandInput} for command's `input` shape.
 * @see {@link DescribeLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLedgerCommand extends $Command<DescribeLedgerCommandInput, DescribeLedgerCommandOutput, QLDBClientResolvedConfig> {
    readonly input: DescribeLedgerCommandInput;
    constructor(input: DescribeLedgerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLedgerCommandInput, DescribeLedgerCommandOutput>;
    private serialize;
    private deserialize;
}
