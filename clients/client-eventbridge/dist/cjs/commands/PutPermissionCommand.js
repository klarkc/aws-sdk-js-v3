"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutPermissionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Running <code>PutPermission</code> permits the specified AWS account or AWS organization
 *       to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch
 *       Events) rules in your account are triggered by these events arriving to an event bus in your
 *       account. </p>
 *          <p>For another account to send events to your account, that external account must have an
 *       EventBridge rule with your account's event bus as a target.</p>
 *
 *          <p>To enable multiple AWS accounts to put events to your event bus, run
 *         <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are
 *       members of the same AWS organization, you can run <code>PutPermission</code> once specifying
 *         <code>Principal</code> as "*" and specifying the AWS organization ID in
 *         <code>Condition</code>, to grant permissions to all accounts in that organization.</p>
 *
 *          <p>If you grant permissions using an organization, then accounts in that organization must
 *       specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to
 *       add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *         Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User
 *         Guide</i>.</p>
 *
 *          <p>The permission policy on the default event bus cannot exceed 10 KB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutPermissionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutPermissionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutPermissionCommand extends smithy_client_1.Command {
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
        const clientName = "EventBridgeClient";
        const commandName = "PutPermissionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutPermissionCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutPermissionCommand(output, context);
    }
}
exports.PutPermissionCommand = PutPermissionCommand;
//# sourceMappingURL=PutPermissionCommand.js.map