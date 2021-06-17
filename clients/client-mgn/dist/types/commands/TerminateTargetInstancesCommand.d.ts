import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { TerminateTargetInstancesRequest, TerminateTargetInstancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TerminateTargetInstancesCommandInput extends TerminateTargetInstancesRequest {
}
export interface TerminateTargetInstancesCommandOutput extends TerminateTargetInstancesResponse, __MetadataBearer {
}
/**
 * <p>Starts a job that terminates specific launched EC2 Test and Cutover instances. This command will not work for any Source Server with a lifecycle.state of TESTING, CUTTING_OVER, or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, TerminateTargetInstancesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, TerminateTargetInstancesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new TerminateTargetInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateTargetInstancesCommandInput} for command's `input` shape.
 * @see {@link TerminateTargetInstancesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TerminateTargetInstancesCommand extends $Command<TerminateTargetInstancesCommandInput, TerminateTargetInstancesCommandOutput, MgnClientResolvedConfig> {
    readonly input: TerminateTargetInstancesCommandInput;
    constructor(input: TerminateTargetInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MgnClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateTargetInstancesCommandInput, TerminateTargetInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
