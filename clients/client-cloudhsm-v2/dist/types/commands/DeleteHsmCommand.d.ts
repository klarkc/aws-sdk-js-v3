import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { DeleteHsmRequest, DeleteHsmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteHsmCommandInput extends DeleteHsmRequest {
}
export interface DeleteHsmCommandOutput extends DeleteHsmResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP
 *       address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to
 *       specify only one of these values. To find these values, use <a>DescribeClusters</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, DeleteHsmCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, DeleteHsmCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new DeleteHsmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHsmCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteHsmCommand extends $Command<DeleteHsmCommandInput, DeleteHsmCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: DeleteHsmCommandInput;
    constructor(input: DeleteHsmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHsmCommandInput, DeleteHsmCommandOutput>;
    private serialize;
    private deserialize;
}
