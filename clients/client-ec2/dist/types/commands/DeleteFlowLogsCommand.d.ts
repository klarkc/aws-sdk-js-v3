import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteFlowLogsRequest, DeleteFlowLogsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteFlowLogsCommandInput extends DeleteFlowLogsRequest {
}
export interface DeleteFlowLogsCommandOutput extends DeleteFlowLogsResult, __MetadataBearer {
}
/**
 * <p>Deletes one or more flow logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteFlowLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowLogsCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteFlowLogsCommand extends $Command<DeleteFlowLogsCommandInput, DeleteFlowLogsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteFlowLogsCommandInput;
    constructor(input: DeleteFlowLogsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFlowLogsCommandInput, DeleteFlowLogsCommandOutput>;
    private serialize;
    private deserialize;
}
