import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateDetectorRequest, CreateDetectorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDetectorCommandInput extends CreateDetectorRequest {
}
export interface CreateDetectorCommandOutput extends CreateDetectorResponse, __MetadataBearer {
}
/**
 * <p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the
 *       GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
 *       you enable the service. You can have only one detector per account per Region. All data
 *       sources are enabled in a new detector by default.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDetectorCommand extends $Command<CreateDetectorCommandInput, CreateDetectorCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: CreateDetectorCommandInput;
    constructor(input: CreateDetectorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDetectorCommandInput, CreateDetectorCommandOutput>;
    private serialize;
    private deserialize;
}
