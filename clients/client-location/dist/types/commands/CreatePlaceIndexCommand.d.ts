import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreatePlaceIndexRequest, CreatePlaceIndexResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePlaceIndexCommandInput extends CreatePlaceIndexRequest {
}
export interface CreatePlaceIndexCommandOutput extends CreatePlaceIndexResponse, __MetadataBearer {
}
/**
 * <p>Creates a place index resource in your AWS account, which supports functions with
 *          geospatial data sourced from your chosen data provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreatePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreatePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreatePlaceIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link CreatePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePlaceIndexCommand extends $Command<CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput, LocationClientResolvedConfig> {
    readonly input: CreatePlaceIndexCommandInput;
    constructor(input: CreatePlaceIndexCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LocationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput>;
    private serialize;
    private deserialize;
}
