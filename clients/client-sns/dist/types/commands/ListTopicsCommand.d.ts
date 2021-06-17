import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListTopicsInput, ListTopicsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTopicsCommandInput extends ListTopicsInput {
}
export interface ListTopicsCommandOutput extends ListTopicsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of the requester's topics. Each call returns a limited list of topics,
 *             up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the
 *                 <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get
 *             further results.</p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListTopicsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListTopicsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListTopicsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTopicsCommandInput} for command's `input` shape.
 * @see {@link ListTopicsCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTopicsCommand extends $Command<ListTopicsCommandInput, ListTopicsCommandOutput, SNSClientResolvedConfig> {
    readonly input: ListTopicsCommandInput;
    constructor(input: ListTopicsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTopicsCommandInput, ListTopicsCommandOutput>;
    private serialize;
    private deserialize;
}
