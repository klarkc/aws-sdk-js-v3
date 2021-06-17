import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { ModifyBackupAttributesRequest, ModifyBackupAttributesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyBackupAttributesCommandInput extends ModifyBackupAttributesRequest {
}
export interface ModifyBackupAttributesCommandOutput extends ModifyBackupAttributesResponse, __MetadataBearer {
}
/**
 * <p>Modifies attributes for AWS CloudHSM backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, ModifyBackupAttributesCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, ModifyBackupAttributesCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new ModifyBackupAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyBackupAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyBackupAttributesCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyBackupAttributesCommand extends $Command<ModifyBackupAttributesCommandInput, ModifyBackupAttributesCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: ModifyBackupAttributesCommandInput;
    constructor(input: ModifyBackupAttributesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyBackupAttributesCommandInput, ModifyBackupAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
