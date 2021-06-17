import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { CreateHsmRequest, CreateHsmResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateHsmCommandInput extends CreateHsmRequest {
}
export interface CreateHsmCommandOutput extends CreateHsmResponse, __MetadataBearer {
}
/**
 * <p>Creates a new hardware security module (HSM) in the specified AWS CloudHSM
 *       cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudHSMV2Client, CreateHsmCommand } from "@aws-sdk/client-cloudhsm-v2"; // ES Modules import
 * // const { CloudHSMV2Client, CreateHsmCommand } = require("@aws-sdk/client-cloudhsm-v2"); // CommonJS import
 * const client = new CloudHSMV2Client(config);
 * const command = new CreateHsmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHsmCommandInput} for command's `input` shape.
 * @see {@link CreateHsmCommandOutput} for command's `response` shape.
 * @see {@link CloudHSMV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateHsmCommand extends $Command<CreateHsmCommandInput, CreateHsmCommandOutput, CloudHSMV2ClientResolvedConfig> {
    readonly input: CreateHsmCommandInput;
    constructor(input: CreateHsmCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudHSMV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHsmCommandInput, CreateHsmCommandOutput>;
    private serialize;
    private deserialize;
}
