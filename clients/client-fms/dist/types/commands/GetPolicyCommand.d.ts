import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetPolicyRequest, GetPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPolicyCommandInput extends GetPolicyRequest {
}
export interface GetPolicyCommandOutput extends GetPolicyResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the specified AWS Firewall Manager policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetPolicyCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetPolicyCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPolicyCommand extends $Command<GetPolicyCommandInput, GetPolicyCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetPolicyCommandInput;
    constructor(input: GetPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPolicyCommandInput, GetPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
