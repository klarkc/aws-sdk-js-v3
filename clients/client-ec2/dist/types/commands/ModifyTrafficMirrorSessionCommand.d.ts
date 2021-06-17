import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTrafficMirrorSessionRequest, ModifyTrafficMirrorSessionResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyTrafficMirrorSessionCommandInput extends ModifyTrafficMirrorSessionRequest {
}
export interface ModifyTrafficMirrorSessionCommandOutput extends ModifyTrafficMirrorSessionResult, __MetadataBearer {
}
/**
 * <p>Modifies a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorSessionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorSessionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyTrafficMirrorSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyTrafficMirrorSessionCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorSessionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyTrafficMirrorSessionCommand extends $Command<ModifyTrafficMirrorSessionCommandInput, ModifyTrafficMirrorSessionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyTrafficMirrorSessionCommandInput;
    constructor(input: ModifyTrafficMirrorSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyTrafficMirrorSessionCommandInput, ModifyTrafficMirrorSessionCommandOutput>;
    private serialize;
    private deserialize;
}
