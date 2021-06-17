import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorSessionRequest, DeleteTrafficMirrorSessionResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTrafficMirrorSessionCommandInput extends DeleteTrafficMirrorSessionRequest {
}
export interface DeleteTrafficMirrorSessionCommandOutput extends DeleteTrafficMirrorSessionResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorSessionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorSessionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTrafficMirrorSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficMirrorSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorSessionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTrafficMirrorSessionCommand extends $Command<DeleteTrafficMirrorSessionCommandInput, DeleteTrafficMirrorSessionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTrafficMirrorSessionCommandInput;
    constructor(input: DeleteTrafficMirrorSessionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficMirrorSessionCommandInput, DeleteTrafficMirrorSessionCommandOutput>;
    private serialize;
    private deserialize;
}
