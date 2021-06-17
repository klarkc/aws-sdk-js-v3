import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteAccountAuditConfigurationRequest, DeleteAccountAuditConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAccountAuditConfigurationCommandInput extends DeleteAccountAuditConfigurationRequest {
}
export interface DeleteAccountAuditConfigurationCommandOutput extends DeleteAccountAuditConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Restores the default settings for Device Defender audits for this account. Any
 *           configuration data you entered is deleted and all audit checks are reset to
 *           disabled.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAccountAuditConfigurationCommand extends $Command<DeleteAccountAuditConfigurationCommandInput, DeleteAccountAuditConfigurationCommandOutput, IoTClientResolvedConfig> {
    readonly input: DeleteAccountAuditConfigurationCommandInput;
    constructor(input: DeleteAccountAuditConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccountAuditConfigurationCommandInput, DeleteAccountAuditConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
