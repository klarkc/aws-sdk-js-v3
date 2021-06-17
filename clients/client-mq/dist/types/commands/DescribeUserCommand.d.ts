import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { DescribeUserRequest, DescribeUserResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeUserCommandInput extends DescribeUserRequest {
}
export interface DescribeUserCommandOutput extends DescribeUserResponse, __MetadataBearer {
}
/**
 * Returns information about an ActiveMQ user.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeUserCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeUserCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUserCommandInput} for command's `input` shape.
 * @see {@link DescribeUserCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeUserCommand extends $Command<DescribeUserCommandInput, DescribeUserCommandOutput, MqClientResolvedConfig> {
    readonly input: DescribeUserCommandInput;
    constructor(input: DescribeUserCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserCommandInput, DescribeUserCommandOutput>;
    private serialize;
    private deserialize;
}
