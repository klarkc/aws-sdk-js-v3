"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeHealthServiceStatusForOrganizationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>This operation provides status information on enabling or disabling AWS Health to work
 *          with your organization. To call this operation, you must sign in as an IAM user, assume
 *          an IAM role, or sign in as the root user (not recommended) in the organization's
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeHealthServiceStatusForOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeHealthServiceStatusForOrganizationCommand extends smithy_client_1.Command {
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
        const clientName = "HealthClient";
        const commandName = "DescribeHealthServiceStatusForOrganizationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: (input) => input,
            outputFilterSensitiveLog: models_0_1.DescribeHealthServiceStatusForOrganizationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand(output, context);
    }
}
exports.DescribeHealthServiceStatusForOrganizationCommand = DescribeHealthServiceStatusForOrganizationCommand;
//# sourceMappingURL=DescribeHealthServiceStatusForOrganizationCommand.js.map