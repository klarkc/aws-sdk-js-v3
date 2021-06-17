import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateFilterRequest, UpdateFilterResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateFilterCommandInput extends UpdateFilterRequest {
}
export interface UpdateFilterCommandOutput extends UpdateFilterResponse, __MetadataBearer {
}
/**
 * <p>Updates the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateFilterCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateFilterCommand extends $Command<UpdateFilterCommandInput, UpdateFilterCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: UpdateFilterCommandInput;
    constructor(input: UpdateFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateFilterCommandInput, UpdateFilterCommandOutput>;
    private serialize;
    private deserialize;
}
