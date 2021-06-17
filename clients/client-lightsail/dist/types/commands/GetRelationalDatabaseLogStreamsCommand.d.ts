import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseLogStreamsRequest, GetRelationalDatabaseLogStreamsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRelationalDatabaseLogStreamsCommandInput extends GetRelationalDatabaseLogStreamsRequest {
}
export interface GetRelationalDatabaseLogStreamsCommandOutput extends GetRelationalDatabaseLogStreamsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of available log streams for a specific database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseLogStreamsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseLogStreamsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseLogStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseLogStreamsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseLogStreamsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRelationalDatabaseLogStreamsCommand extends $Command<GetRelationalDatabaseLogStreamsCommandInput, GetRelationalDatabaseLogStreamsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseLogStreamsCommandInput;
    constructor(input: GetRelationalDatabaseLogStreamsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseLogStreamsCommandInput, GetRelationalDatabaseLogStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
