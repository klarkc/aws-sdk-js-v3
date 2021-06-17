import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateReplaceRootVolumeTaskRequest, CreateReplaceRootVolumeTaskResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateReplaceRootVolumeTaskCommandInput extends CreateReplaceRootVolumeTaskRequest {
}
export interface CreateReplaceRootVolumeTaskCommandOutput extends CreateReplaceRootVolumeTaskResult, __MetadataBearer {
}
/**
 * <p>Creates a root volume replacement task for an Amazon EC2 instance. The root volume
 *       can either be restored to its initial launch state, or it can be restored using a
 *       specific snapshot.</p>
 *
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/">Replace a root volume</a>
 *       in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateReplaceRootVolumeTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateReplaceRootVolumeTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateReplaceRootVolumeTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplaceRootVolumeTaskCommandInput} for command's `input` shape.
 * @see {@link CreateReplaceRootVolumeTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateReplaceRootVolumeTaskCommand extends $Command<CreateReplaceRootVolumeTaskCommandInput, CreateReplaceRootVolumeTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateReplaceRootVolumeTaskCommandInput;
    constructor(input: CreateReplaceRootVolumeTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplaceRootVolumeTaskCommandInput, CreateReplaceRootVolumeTaskCommandOutput>;
    private serialize;
    private deserialize;
}
