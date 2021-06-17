import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetIPSetRequest, GetIPSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetIPSetCommandInput extends GetIPSetRequest {
}
export interface GetIPSetCommandOutput extends GetIPSetResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the IPSet specified by the <code>ipSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIPSetCommandInput} for command's `input` shape.
 * @see {@link GetIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetIPSetCommand extends $Command<GetIPSetCommandInput, GetIPSetCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: GetIPSetCommandInput;
    constructor(input: GetIPSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIPSetCommandInput, GetIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
