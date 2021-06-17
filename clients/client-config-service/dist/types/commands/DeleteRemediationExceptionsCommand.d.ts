import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteRemediationExceptionsRequest, DeleteRemediationExceptionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRemediationExceptionsCommandInput extends DeleteRemediationExceptionsRequest {
}
export interface DeleteRemediationExceptionsCommandOutput extends DeleteRemediationExceptionsResponse, __MetadataBearer {
}
/**
 * <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p>
 * 		       <note>
 *             <p>AWS Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 			Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link DeleteRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRemediationExceptionsCommand extends $Command<DeleteRemediationExceptionsCommandInput, DeleteRemediationExceptionsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeleteRemediationExceptionsCommandInput;
    constructor(input: DeleteRemediationExceptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRemediationExceptionsCommandInput, DeleteRemediationExceptionsCommandOutput>;
    private serialize;
    private deserialize;
}
