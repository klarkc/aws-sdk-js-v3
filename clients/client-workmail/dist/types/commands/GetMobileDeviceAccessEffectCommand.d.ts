import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { GetMobileDeviceAccessEffectRequest, GetMobileDeviceAccessEffectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMobileDeviceAccessEffectCommandInput extends GetMobileDeviceAccessEffectRequest {
}
export interface GetMobileDeviceAccessEffectCommandOutput extends GetMobileDeviceAccessEffectResponse, __MetadataBearer {
}
/**
 * <p>Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access
 *          rules for the Amazon WorkMail organization for a particular user's attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMobileDeviceAccessEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMobileDeviceAccessEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetMobileDeviceAccessEffectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMobileDeviceAccessEffectCommandInput} for command's `input` shape.
 * @see {@link GetMobileDeviceAccessEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMobileDeviceAccessEffectCommand extends $Command<GetMobileDeviceAccessEffectCommandInput, GetMobileDeviceAccessEffectCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: GetMobileDeviceAccessEffectCommandInput;
    constructor(input: GetMobileDeviceAccessEffectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMobileDeviceAccessEffectCommandInput, GetMobileDeviceAccessEffectCommandOutput>;
    private serialize;
    private deserialize;
}
