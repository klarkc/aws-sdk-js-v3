import { __extends } from "tslib";
import { CreateHealthCheckRequest, CreateHealthCheckResponse } from "../models/models_0";
import { deserializeAws_restXmlCreateHealthCheckCommand, serializeAws_restXmlCreateHealthCheckCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateHealthCheckCommand = /** @class */ (function (_super) {
    __extends(CreateHealthCheckCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHealthCheckCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateHealthCheckCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "CreateHealthCheckCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHealthCheckRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHealthCheckResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHealthCheckCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateHealthCheckCommand(input, context);
    };
    CreateHealthCheckCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateHealthCheckCommand(output, context);
    };
    return CreateHealthCheckCommand;
}($Command));
export { CreateHealthCheckCommand };
//# sourceMappingURL=CreateHealthCheckCommand.js.map