"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChangeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_sdk_route53_1 = require("@aws-sdk/middleware-sdk-route53");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the current status of a change batch request. The status is one of the
 * 			following values:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>PENDING</code> indicates that the changes in this request have not propagated to all Amazon Route 53 DNS servers.
 * 					This is the initial status of all change batch requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>INSYNC</code> indicates that the changes have propagated to all Route 53 DNS servers. </p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetChangeCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetChangeCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetChangeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetChangeCommandInput} for command's `input` shape.
 * @see {@link GetChangeCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetChangeCommand extends smithy_client_1.Command {
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
        const commandName = "GetChangeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetChangeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetChangeResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlGetChangeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlGetChangeCommand(output, context);
    }
}
exports.GetChangeCommand = GetChangeCommand;
//# sourceMappingURL=GetChangeCommand.js.map