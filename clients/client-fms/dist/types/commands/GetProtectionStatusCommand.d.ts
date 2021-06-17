import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetProtectionStatusRequest, GetProtectionStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetProtectionStatusCommandInput extends GetProtectionStatusRequest {
}
export interface GetProtectionStatusCommandOutput extends GetProtectionStatusResponse, __MetadataBearer {
}
/**
 * <p>If you created a Shield Advanced policy, returns policy-level attack summary information
 *          in the event of a potential DDoS attack. Other policy types are currently unsupported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetProtectionStatusCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetProtectionStatusCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetProtectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProtectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetProtectionStatusCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetProtectionStatusCommand extends $Command<GetProtectionStatusCommandInput, GetProtectionStatusCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetProtectionStatusCommandInput;
    constructor(input: GetProtectionStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetProtectionStatusCommandInput, GetProtectionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
