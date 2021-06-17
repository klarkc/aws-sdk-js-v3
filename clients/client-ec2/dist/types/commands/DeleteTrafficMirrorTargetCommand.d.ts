import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorTargetRequest, DeleteTrafficMirrorTargetResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTrafficMirrorTargetCommandInput extends DeleteTrafficMirrorTargetRequest {
}
export interface DeleteTrafficMirrorTargetCommandOutput extends DeleteTrafficMirrorTargetResult, __MetadataBearer {
}
/**
 * <p>Deletes the specified Traffic Mirror target.</p>
 *          <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTrafficMirrorTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTrafficMirrorTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTrafficMirrorTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrafficMirrorTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficMirrorTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTrafficMirrorTargetCommand extends $Command<DeleteTrafficMirrorTargetCommandInput, DeleteTrafficMirrorTargetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteTrafficMirrorTargetCommandInput;
    constructor(input: DeleteTrafficMirrorTargetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrafficMirrorTargetCommandInput, DeleteTrafficMirrorTargetCommandOutput>;
    private serialize;
    private deserialize;
}
