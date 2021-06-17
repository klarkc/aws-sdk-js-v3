import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetGeoLocationRequest, GetGeoLocationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGeoLocationCommandInput extends GetGeoLocationRequest {
}
export interface GetGeoLocationCommandOutput extends GetGeoLocationResponse, __MetadataBearer {
}
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
export declare class GetGeoLocationCommand extends $Command<GetGeoLocationCommandInput, GetGeoLocationCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetGeoLocationCommandInput;
    constructor(input: GetGeoLocationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGeoLocationCommandInput, GetGeoLocationCommandOutput>;
    private serialize;
    private deserialize;
}
