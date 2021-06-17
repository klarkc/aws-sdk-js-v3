"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDistributionBundleCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the bundle of your Amazon Lightsail content delivery network (CDN)
 *       distribution.</p>
 *          <p>A distribution bundle specifies the monthly network transfer quota and monthly cost of
 *       your dsitribution.</p>
 *          <p>Update your distribution's bundle if your distribution is going over its monthly network
 *       transfer quota and is incurring an overage fee.</p>
 *          <p>You can update your distribution's bundle only one time within your monthly AWS billing
 *       cycle. To determine if you can update your distribution's bundle, use the
 *         <code>GetDistributions</code> action. The <code>ableToUpdateBundle</code> parameter in the
 *       result will indicate whether you can currently update your distribution's bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateDistributionBundleCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateDistributionBundleCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateDistributionBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDistributionBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateDistributionBundleCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateDistributionBundleCommand extends smithy_client_1.Command {
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
        const clientName = "LightsailClient";
        const commandName = "UpdateDistributionBundleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.UpdateDistributionBundleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.UpdateDistributionBundleResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateDistributionBundleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateDistributionBundleCommand(output, context);
    }
}
exports.UpdateDistributionBundleCommand = UpdateDistributionBundleCommand;
//# sourceMappingURL=UpdateDistributionBundleCommand.js.map