import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListBonusPaymentsRequest, ListBonusPaymentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBonusPaymentsCommandInput extends ListBonusPaymentsRequest {
}
export interface ListBonusPaymentsCommandOutput extends ListBonusPaymentsResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>ListBonusPayments</code>
 *             operation retrieves the amounts of bonuses you have paid to Workers
 *             for a given HIT or assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListBonusPaymentsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListBonusPaymentsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListBonusPaymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBonusPaymentsCommandInput} for command's `input` shape.
 * @see {@link ListBonusPaymentsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBonusPaymentsCommand extends $Command<ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListBonusPaymentsCommandInput;
    constructor(input: ListBonusPaymentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput>;
    private serialize;
    private deserialize;
}
