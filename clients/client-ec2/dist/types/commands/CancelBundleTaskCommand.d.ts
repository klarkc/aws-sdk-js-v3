import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelBundleTaskRequest, CancelBundleTaskResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelBundleTaskCommandInput extends CancelBundleTaskRequest {
}
export interface CancelBundleTaskCommandOutput extends CancelBundleTaskResult, __MetadataBearer {
}
/**
 * <p>Cancels a bundling operation for an instance store-backed Windows instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelBundleTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelBundleTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelBundleTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelBundleTaskCommandInput} for command's `input` shape.
 * @see {@link CancelBundleTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelBundleTaskCommand extends $Command<CancelBundleTaskCommandInput, CancelBundleTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelBundleTaskCommandInput;
    constructor(input: CancelBundleTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelBundleTaskCommandInput, CancelBundleTaskCommandOutput>;
    private serialize;
    private deserialize;
}
