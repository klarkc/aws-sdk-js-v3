import { __extends } from "tslib";
import { GetGeoLocationRequest, GetGeoLocationResponse } from "../models/models_0";
import { deserializeAws_restXmlGetGeoLocationCommand, serializeAws_restXmlGetGeoLocationCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var GetGeoLocationCommand = /** @class */ (function (_super) {
    __extends(GetGeoLocationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGeoLocationCommand(input) {
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
    GetGeoLocationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "GetGeoLocationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGeoLocationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGeoLocationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGeoLocationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetGeoLocationCommand(input, context);
    };
    GetGeoLocationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetGeoLocationCommand(output, context);
    };
    return GetGeoLocationCommand;
}($Command));
export { GetGeoLocationCommand };
//# sourceMappingURL=GetGeoLocationCommand.js.map