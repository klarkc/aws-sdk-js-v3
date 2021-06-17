import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListGeoLocationsRequest, ListGeoLocationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListGeoLocationsCommandInput extends ListGeoLocationsRequest {
}
export interface ListGeoLocationsCommandOutput extends ListGeoLocationsResponse, __MetadataBearer {
}
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
export declare class ListGeoLocationsCommand extends $Command<ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListGeoLocationsCommandInput;
    constructor(input: ListGeoLocationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput>;
    private serialize;
    private deserialize;
}
