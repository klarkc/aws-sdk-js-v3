"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFargateProfileCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes an AWS Fargate profile.</p>
 *         <p>When you delete a Fargate profile, any pods running on Fargate that were created with the
 *             profile are deleted. If those pods match another Fargate profile, then they are scheduled
 *             on Fargate with that profile. If they no longer match any Fargate profiles, then they are not
 *             scheduled on Fargate and they may remain in a pending state.</p>
 *         <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a
 *             time. You must wait for a Fargate profile to finish deleting before you can delete any
 *             other profiles in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DeleteFargateProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteFargateProfileCommand extends smithy_client_1.Command {
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
        const clientName = "EKSClient";
        const commandName = "DeleteFargateProfileCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteFargateProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteFargateProfileResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteFargateProfileCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteFargateProfileCommand(output, context);
    }
}
exports.DeleteFargateProfileCommand = DeleteFargateProfileCommand;
//# sourceMappingURL=DeleteFargateProfileCommand.js.map