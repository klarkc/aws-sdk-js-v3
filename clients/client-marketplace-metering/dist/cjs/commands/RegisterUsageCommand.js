"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUsageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Paid container software products sold through AWS Marketplace must integrate with
 *             the AWS Marketplace Metering Service and call the RegisterUsage operation for software
 *             entitlement and metering. Free and BYOL products for Amazon ECS or Amazon EKS aren't
 *             required to call RegisterUsage, but you may choose to do so if you would like to receive
 *             usage data in your seller reports. The sections below explain the behavior of
 *             RegisterUsage. RegisterUsage performs two primary functions: metering and
 *             entitlement.</p>
 *
 *         <ul>
 *             <li>
 *                 <p>
 *                     <i>Entitlement</i>: RegisterUsage allows you to verify that the
 *                     customer running your paid software is subscribed to your product on AWS
 *                     Marketplace, enabling you to guard against unauthorized use. Your container
 *                     image that integrates with RegisterUsage is only required to guard against
 *                     unauthorized use at container startup, as such a
 *                     CustomerNotSubscribedException/PlatformNotSupportedException will only be thrown
 *                     on the initial call to RegisterUsage. Subsequent calls from the same Amazon ECS
 *                     task instance (e.g. task-id) or Amazon EKS pod will not throw a
 *                     CustomerNotSubscribedException, even if the customer unsubscribes while the
 *                     Amazon ECS task or Amazon EKS pod is still running.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <i>Metering</i>: RegisterUsage meters software use per ECS task,
 *                     per hour, or per pod for Amazon EKS with usage prorated to the second. A minimum
 *                     of 1 minute of usage applies to tasks that are short lived. For example, if a
 *                     customer has a 10 node Amazon ECS or Amazon EKS cluster and a service configured
 *                     as a Daemon Set, then Amazon ECS or Amazon EKS will launch a task on all 10
 *                     cluster nodes and the customer will be charged: (10 * hourly_rate). Metering for
 *                     software use is automatically handled by the AWS Marketplace Metering Control
 *                     Plane -- your software is not required to perform any metering specific actions,
 *                     other than call RegisterUsage once for metering of software use to commence. The
 *                     AWS Marketplace Metering Control Plane will also continue to bill customers for
 *                     running ECS tasks and Amazon EKS pods, regardless of the customers subscription
 *                     state, removing the need for your software to perform entitlement checks at
 *                     runtime.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, RegisterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, RegisterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new RegisterUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterUsageCommandInput} for command's `input` shape.
 * @see {@link RegisterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RegisterUsageCommand extends smithy_client_1.Command {
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
        const clientName = "MarketplaceMeteringClient";
        const commandName = "RegisterUsageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RegisterUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RegisterUsageResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RegisterUsageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RegisterUsageCommand(output, context);
    }
}
exports.RegisterUsageCommand = RegisterUsageCommand;
//# sourceMappingURL=RegisterUsageCommand.js.map