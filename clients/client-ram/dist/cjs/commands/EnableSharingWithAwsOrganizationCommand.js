"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableSharingWithAwsOrganizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables resource sharing within your AWS Organization.</p>
 *          <p>The caller must be the master account for the AWS Organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, EnableSharingWithAwsOrganizationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, EnableSharingWithAwsOrganizationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new EnableSharingWithAwsOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSharingWithAwsOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableSharingWithAwsOrganizationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class EnableSharingWithAwsOrganizationCommand extends smithy_client_1.Command {
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
        const clientName = "RAMClient";
        const commandName = "EnableSharingWithAwsOrganizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.EnableSharingWithAwsOrganizationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.EnableSharingWithAwsOrganizationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1EnableSharingWithAwsOrganizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand(output, context);
    }
}
exports.EnableSharingWithAwsOrganizationCommand = EnableSharingWithAwsOrganizationCommand;
//# sourceMappingURL=EnableSharingWithAwsOrganizationCommand.js.map