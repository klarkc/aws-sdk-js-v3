"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteChannelPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a channel's IAM policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, DeleteChannelPolicyCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, DeleteChannelPolicyCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new DeleteChannelPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteChannelPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteChannelPolicyCommand extends smithy_client_1.Command {
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
        const clientName = "MediaTailorClient";
        const commandName = "DeleteChannelPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteChannelPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteChannelPolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DeleteChannelPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DeleteChannelPolicyCommand(output, context);
    }
}
exports.DeleteChannelPolicyCommand = DeleteChannelPolicyCommand;
//# sourceMappingURL=DeleteChannelPolicyCommand.js.map