import { __extends } from "tslib";
import { ListGeoLocationsRequest, ListGeoLocationsResponse } from "../models/models_0";
import { deserializeAws_restXmlListGeoLocationsCommand, serializeAws_restXmlListGeoLocationsCommand, } from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a list of supported geographic locations.</p>
 * 		       <p>Countries are listed first, and continents are listed last. If Amazon Route 53 supports subdivisions for a country (for example, states or provinces),
 * 			the subdivisions for that country are listed in alphabetical order immediately after the corresponding country.</p>
 * 	        <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
 * 	        <p>For a list of supported geolocation codes, see the
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GeoLocation.html">GeoLocation</a> data type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListGeoLocationsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListGeoLocationsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListGeoLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGeoLocationsCommandInput} for command's `input` shape.
 * @see {@link ListGeoLocationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGeoLocationsCommand = /** @class */ (function (_super) {
    __extends(ListGeoLocationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGeoLocationsCommand(input) {
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
    ListGeoLocationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Route53Client";
        var commandName = "ListGeoLocationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGeoLocationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListGeoLocationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGeoLocationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlListGeoLocationsCommand(input, context);
    };
    ListGeoLocationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlListGeoLocationsCommand(output, context);
    };
    return ListGeoLocationsCommand;
}($Command));
export { ListGeoLocationsCommand };
//# sourceMappingURL=ListGeoLocationsCommand.js.map