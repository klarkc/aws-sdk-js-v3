import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteDetectorRequest, DeleteDetectorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDetectorCommandInput extends DeleteDetectorRequest {
}
export interface DeleteDetectorCommandOutput extends DeleteDetectorResponse, __MetadataBearer {
}
/**
 * <p>Deletes an Amazon GuardDuty detector that is specified by the detector ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new DeleteDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDetectorCommand extends $Command<DeleteDetectorCommandInput, DeleteDetectorCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: DeleteDetectorCommandInput;
    constructor(input: DeleteDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDetectorCommandInput, DeleteDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
