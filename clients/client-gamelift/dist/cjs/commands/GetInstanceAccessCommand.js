"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInstanceAccessCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class GetInstanceAccessCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GameLiftClient";
        const commandName = "GetInstanceAccessCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetInstanceAccessInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetInstanceAccessOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetInstanceAccessCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetInstanceAccessCommand(output, context);
    }
}
exports.GetInstanceAccessCommand = GetInstanceAccessCommand;
//# sourceMappingURL=GetInstanceAccessCommand.js.map