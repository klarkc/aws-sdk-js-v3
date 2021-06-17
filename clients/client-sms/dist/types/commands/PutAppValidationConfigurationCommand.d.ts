import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { PutAppValidationConfigurationRequest, PutAppValidationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutAppValidationConfigurationCommandInput extends PutAppValidationConfigurationRequest {
}
export interface PutAppValidationConfigurationCommandOutput extends PutAppValidationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Creates or updates a validation configuration for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, PutAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, PutAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new PutAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutAppValidationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutAppValidationConfigurationCommand extends $Command<PutAppValidationConfigurationCommandInput, PutAppValidationConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: PutAppValidationConfigurationCommandInput;
    constructor(input: PutAppValidationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAppValidationConfigurationCommandInput, PutAppValidationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
