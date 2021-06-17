"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetVisibleToAllUsersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Sets the <a>Cluster$VisibleToAllUsers</a> value, which determines whether the
 *          cluster is visible to all IAM users of the AWS account associated with the cluster. Only
 *          the IAM user who created the cluster or the AWS account root user can call this action. The
 *          default value, <code>true</code>, indicates that all IAM users in the AWS account can
 *          perform cluster actions if they have the proper IAM policy permissions. If set to
 *             <code>false</code>, only the IAM user that created the cluster can perform actions. This
 *          action works on running clusters. You can override the default <code>true</code> setting
 *          when you create a cluster by using the <code>VisibleToAllUsers</code> parameter with
 *             <code>RunJobFlow</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetVisibleToAllUsersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetVisibleToAllUsersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new SetVisibleToAllUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetVisibleToAllUsersCommandInput} for command's `input` shape.
 * @see {@link SetVisibleToAllUsersCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SetVisibleToAllUsersCommand extends smithy_client_1.Command {
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
        const clientName = "EMRClient";
        const commandName = "SetVisibleToAllUsersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.SetVisibleToAllUsersInput.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1SetVisibleToAllUsersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1SetVisibleToAllUsersCommand(output, context);
    }
}
exports.SetVisibleToAllUsersCommand = SetVisibleToAllUsersCommand;
//# sourceMappingURL=SetVisibleToAllUsersCommand.js.map