"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateHealthCheckCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new health check.</p>
 * 		       <p>For information about adding health checks to resource record sets, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId">HealthCheckId</a>
 * 			in
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html">ChangeResourceRecordSets</a>. </p>
 *
 * 		       <p>
 *             <b>ELB Load Balancers</b>
 *          </p>
 * 		       <p>If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the
 * 			EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a
 * 			similar function to a Route 53 health check.</p>
 *
 * 		       <p>
 *             <b>Private Hosted Zones</b>
 *          </p>
 * 		       <p>You can associate health checks with failover resource record sets in a private hosted zone. Note the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must
 * 					assign a public IP address to the instance in the VPC.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You can configure a health checker to check the health of an external resource that the instance relies on, such as a
 * 					database server.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the
 * 					state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 <code>StatusCheckFailed</code> metric,
 * 					add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating
 * 					CloudWatch metrics and alarms by using the CloudWatch console, see the
 * 					<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/WhatIsCloudWatch.html">Amazon CloudWatch User Guide</a>.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new CreateHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link CreateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateHealthCheckCommand extends smithy_client_1.Command {
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
        const clientName = "Route53Client";
        const commandName = "CreateHealthCheckCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateHealthCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateHealthCheckResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlCreateHealthCheckCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlCreateHealthCheckCommand(output, context);
    }
}
exports.CreateHealthCheckCommand = CreateHealthCheckCommand;
//# sourceMappingURL=CreateHealthCheckCommand.js.map