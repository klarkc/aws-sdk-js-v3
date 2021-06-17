import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { GetRateBasedStatementManagedKeysRequest, GetRateBasedStatementManagedKeysResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRateBasedStatementManagedKeysCommandInput extends GetRateBasedStatementManagedKeysRequest {
}
export interface GetRateBasedStatementManagedKeysCommandOutput extends GetRateBasedStatementManagedKeysResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the keys that are currently blocked by a rate-based rule. The maximum number of managed keys that can be blocked for a single rate-based rule is 10,000. If more than 10,000 addresses exceed the rate limit, those with the highest rates are blocked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetRateBasedStatementManagedKeysCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetRateBasedStatementManagedKeysCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new GetRateBasedStatementManagedKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRateBasedStatementManagedKeysCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedStatementManagedKeysCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRateBasedStatementManagedKeysCommand extends $Command<GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: GetRateBasedStatementManagedKeysCommandInput;
    constructor(input: GetRateBasedStatementManagedKeysCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRateBasedStatementManagedKeysCommandInput, GetRateBasedStatementManagedKeysCommandOutput>;
    private serialize;
    private deserialize;
}
