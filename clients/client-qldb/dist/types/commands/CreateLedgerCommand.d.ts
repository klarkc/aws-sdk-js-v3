import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { CreateLedgerRequest, CreateLedgerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLedgerCommandInput extends CreateLedgerRequest {
}
export interface CreateLedgerCommandOutput extends CreateLedgerResponse, __MetadataBearer {
}
/**
 * <p>Creates a new ledger in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, CreateLedgerCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, CreateLedgerCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * const client = new QLDBClient(config);
 * const command = new CreateLedgerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLedgerCommandInput} for command's `input` shape.
 * @see {@link CreateLedgerCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLedgerCommand extends $Command<CreateLedgerCommandInput, CreateLedgerCommandOutput, QLDBClientResolvedConfig> {
    readonly input: CreateLedgerCommandInput;
    constructor(input: CreateLedgerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: QLDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLedgerCommandInput, CreateLedgerCommandOutput>;
    private serialize;
    private deserialize;
}
