"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGeoLocationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets information about whether a specified geographic location is supported for Amazon Route 53 geolocation
 * 			resource record sets.</p>
 * 	        <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
 *
 * 		       <p>Use the following syntax to determine whether a continent is supported for geolocation:</p>
 * 		       <p>
 *             <code>GET /2013-04-01/geolocation?continentcode=<i>two-letter abbreviation for a continent</i>
 *             </code>
 *          </p>
 *
 * 		       <p>Use the following syntax to determine whether a country is supported for geolocation:</p>
 * 		       <p>
 *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>
 *             </code>
 *          </p>
 *
 * 		       <p>Use the following syntax to determine whether a subdivision of a country is supported for geolocation:</p>
 * 		       <p>
 *             <code>GET /2013-04-01/geolocation?countrycode=<i>two-character country code</i>&subdivisioncode=<i>subdivision code</i>
 *             </code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetGeoLocationCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetGeoLocationCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetGeoLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGeoLocationCommandInput} for command's `input` shape.
 * @see {@link GetGeoLocationCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetGeoLocationCommand extends smithy_client_1.Command {
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
        const commandName = "GetGeoLocationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetGeoLocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetGeoLocationResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restXml_1.serializeAws_restXmlGetGeoLocationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restXml_1.deserializeAws_restXmlGetGeoLocationCommand(output, context);
    }
}
exports.GetGeoLocationCommand = GetGeoLocationCommand;
//# sourceMappingURL=GetGeoLocationCommand.js.map