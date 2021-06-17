import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { StartStudioSSOConfigurationRepairRequest, StartStudioSSOConfigurationRepairResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartStudioSSOConfigurationRepairCommandInput extends StartStudioSSOConfigurationRepairRequest {
}
export interface StartStudioSSOConfigurationRepairCommandOutput extends StartStudioSSOConfigurationRepairResponse, __MetadataBearer {
}
/**
 * <p>Repairs the SSO configuration for a given studio.</p> <p>If the studio has a valid AWS SSO configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid AWS SSO configuration currently associated with it, then a new AWS SSO application is created for the studio and the studio is changed to the READY state.</p> <p>After the AWS SSO application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, StartStudioSSOConfigurationRepairCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, StartStudioSSOConfigurationRepairCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new StartStudioSSOConfigurationRepairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStudioSSOConfigurationRepairCommandInput} for command's `input` shape.
 * @see {@link StartStudioSSOConfigurationRepairCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartStudioSSOConfigurationRepairCommand extends $Command<StartStudioSSOConfigurationRepairCommandInput, StartStudioSSOConfigurationRepairCommandOutput, NimbleClientResolvedConfig> {
    readonly input: StartStudioSSOConfigurationRepairCommandInput;
    constructor(input: StartStudioSSOConfigurationRepairCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NimbleClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartStudioSSOConfigurationRepairCommandInput, StartStudioSSOConfigurationRepairCommandOutput>;
    private serialize;
    private deserialize;
}
