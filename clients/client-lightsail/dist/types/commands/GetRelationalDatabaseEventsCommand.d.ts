import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseEventsRequest, GetRelationalDatabaseEventsResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRelationalDatabaseEventsCommandInput extends GetRelationalDatabaseEventsRequest {
}
export interface GetRelationalDatabaseEventsCommandOutput extends GetRelationalDatabaseEventsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of events for a specific database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseEventsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseEventsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseEventsCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseEventsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRelationalDatabaseEventsCommand extends $Command<GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseEventsCommandInput;
    constructor(input: GetRelationalDatabaseEventsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput>;
    private serialize;
    private deserialize;
}
