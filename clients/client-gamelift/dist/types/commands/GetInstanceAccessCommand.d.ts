import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { GetInstanceAccessInput, GetInstanceAccessOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInstanceAccessCommandInput extends GetInstanceAccessInput {
}
export interface GetInstanceAccessCommandOutput extends GetInstanceAccessOutput, __MetadataBearer {
}
/**
 * <p>Requests remote access to a fleet instance. Remote access is useful for debugging,
 *             gathering benchmarking data, or observing activity in real time. </p>
 *         <p>To remotely access an instance, you need credentials that match the operating system
 *             of the instance. For a Windows instance, GameLift returns a user name and password as
 *             strings for use with a Windows Remote Desktop client. For a Linux instance, GameLift
 *             returns a user name and RSA private key, also as strings, for use with an SSH client.
 *             The private key must be saved in the proper format to a <code>.pem</code> file before
 *             using. If you're making this request using the AWS CLI, saving the secret can be handled
 *             as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples
 *             for this operation. </p>
 *         <p>To request access to a specific instance, specify the IDs of both the instance and the
 *             fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a>DescribeInstances</a>. If successful, an <a>InstanceAccess</a>
 *             object is returned that contains the instance's IP address and a set of
 *             credentials.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet
 *                 Instances</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet
 *                 Issues</a>
 *          </p>
 *
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>DescribeInstances</a> |
 *                     <a>GetInstanceAccess</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetInstanceAccessCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetInstanceAccessCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new GetInstanceAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceAccessCommandInput} for command's `input` shape.
 * @see {@link GetInstanceAccessCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInstanceAccessCommand extends $Command<GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: GetInstanceAccessCommandInput;
    constructor(input: GetInstanceAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput>;
    private serialize;
    private deserialize;
}
