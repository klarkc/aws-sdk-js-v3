import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateDetectorRequest, UpdateDetectorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateDetectorCommandInput extends UpdateDetectorRequest {
}
export interface UpdateDetectorCommandOutput extends UpdateDetectorResponse, __MetadataBearer {
}
/**
 * <p>Updates the Amazon GuardDuty detector specified by the detectorId.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UpdateDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDetectorCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateDetectorCommand extends $Command<UpdateDetectorCommandInput, UpdateDetectorCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: UpdateDetectorCommandInput;
    constructor(input: UpdateDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDetectorCommandInput, UpdateDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
