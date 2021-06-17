import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { CopyBackupToRegionRequest, CopyBackupToRegionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyBackupToRegionCommandInput extends CopyBackupToRegionRequest {
}
export interface CopyBackupToRegionCommandOutput extends CopyBackupToRegionResponse, __MetadataBearer {
}
/**
 * <p>Copy an AWS CloudHSM cluster backup to a different region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CopyBackupToRegionCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CopyBackupToRegionCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new CopyBackupToRegionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyBackupToRegionCommandInput} for command's `input` shape.
 * @see {@link CopyBackupToRegionCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyBackupToRegionCommand extends $Command<CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: CopyBackupToRegionCommandInput;
    constructor(input: CopyBackupToRegionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput>;
    private serialize;
    private deserialize;
}
