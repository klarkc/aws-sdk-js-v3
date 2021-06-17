import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateIPSetRequest, CreateIPSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateIPSetCommandInput extends CreateIPSetRequest {
}
export interface CreateIPSetCommandOutput extends CreateIPSetResponse, __MetadataBearer {
}
/**
 * <p>Creates a new IPSet, which is called a trusted IP list in the console user interface. An
 *       IPSet is a list of IP addresses that are trusted for secure communication with AWS
 *       infrastructure and applications. GuardDuty doesn't generate findings for IP addresses that are
 *       included in IPSets. Only users from the administrator account can use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIPSetCommandInput} for command's `input` shape.
 * @see {@link CreateIPSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateIPSetCommand extends $Command<CreateIPSetCommandInput, CreateIPSetCommandOutput, GuardDutyClientResolvedConfig> {
    readonly input: CreateIPSetCommandInput;
    constructor(input: CreateIPSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GuardDutyClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateIPSetCommandInput, CreateIPSetCommandOutput>;
    private serialize;
    private deserialize;
}
