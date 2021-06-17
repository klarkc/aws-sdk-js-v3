"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTrafficPolicyInstanceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version.</p>
 * 		       <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name
 * 			(such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant
 * 					the differences are between the existing resource record sets and the new resource record sets. </p>
 * 			         </li>
 *             <li>
 * 				           <p>When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name
 * 					(such as example.com) by using the new resource record sets.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateTrafficPolicyInstanceCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use(middleware_sdk_route53_1.getIdNormalizerPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "Route53Client";
        const commandName = "UpdateTrafficPolicyInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateTrafficPolicyInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateTrafficPolicyInstanceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlUpdateTrafficPolicyInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlUpdateTrafficPolicyInstanceCommand(output, context);
    }
}
exports.UpdateTrafficPolicyInstanceCommand = UpdateTrafficPolicyInstanceCommand;
//# sourceMappingURL=UpdateTrafficPolicyInstanceCommand.js.map