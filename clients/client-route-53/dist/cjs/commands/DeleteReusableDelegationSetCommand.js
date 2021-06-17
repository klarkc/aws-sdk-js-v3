"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteReusableDelegationSetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a reusable delegation set.</p>
 * 		       <important>
 * 			         <p>You can delete a reusable delegation set only if it isn't associated with any hosted zones.</p>
 * 		       </important>
 * 		       <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a>
 * 			request and specify the ID of the reusable delegation set that you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteReusableDelegationSetCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteReusableDelegationSetCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteReusableDelegationSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteReusableDelegationSetResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlDeleteReusableDelegationSetCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlDeleteReusableDelegationSetCommand(output, context);
    }
}
exports.DeleteReusableDelegationSetCommand = DeleteReusableDelegationSetCommand;
//# sourceMappingURL=DeleteReusableDelegationSetCommand.js.map