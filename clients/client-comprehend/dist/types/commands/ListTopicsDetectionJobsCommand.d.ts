import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListTopicsDetectionJobsRequest, ListTopicsDetectionJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTopicsDetectionJobsCommandInput extends ListTopicsDetectionJobsRequest {
}
export interface ListTopicsDetectionJobsCommandOutput extends ListTopicsDetectionJobsResponse, __MetadataBearer {
}
/**
 * <p>Gets a list of the topic detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListTopicsDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListTopicsDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListTopicsDetectionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTopicsDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListTopicsDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTopicsDetectionJobsCommand extends $Command<ListTopicsDetectionJobsCommandInput, ListTopicsDetectionJobsCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: ListTopicsDetectionJobsCommandInput;
    constructor(input: ListTopicsDetectionJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTopicsDetectionJobsCommandInput, ListTopicsDetectionJobsCommandOutput>;
    private serialize;
    private deserialize;
}
