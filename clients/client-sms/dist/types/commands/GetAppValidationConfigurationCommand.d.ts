import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetAppValidationConfigurationRequest, GetAppValidationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAppValidationConfigurationCommandInput extends GetAppValidationConfigurationRequest {
}
export interface GetAppValidationConfigurationCommandOutput extends GetAppValidationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a configuration for validating an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppValidationConfigurationCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppValidationConfigurationCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppValidationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppValidationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAppValidationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAppValidationConfigurationCommand extends $Command<GetAppValidationConfigurationCommandInput, GetAppValidationConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetAppValidationConfigurationCommandInput;
    constructor(input: GetAppValidationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppValidationConfigurationCommandInput, GetAppValidationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
