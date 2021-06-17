import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetFilterRequest, GetFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFilterCommandInput extends GetFilterRequest {
}
export interface GetFilterCommandOutput extends GetFilterResponse, __MetadataBearer {
}
/**
 * <p>Returns the details of the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new GetFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFilterCommandInput} for command's `input` shape.
 * @see {@link GetFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFilterCommand extends $Command<GetFilterCommandInput, GetFilterCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: GetFilterCommandInput;
    constructor(input: GetFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFilterCommandInput, GetFilterCommandOutput>;
    private serialize;
    private deserialize;
}
