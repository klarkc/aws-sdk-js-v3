import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseRequest, GetRelationalDatabaseResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRelationalDatabaseCommandInput extends GetRelationalDatabaseRequest {
}
export interface GetRelationalDatabaseCommandOutput extends GetRelationalDatabaseResult, __MetadataBearer {
}
/**
 * <p>Returns information about a specific database in Amazon Lightsail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetRelationalDatabaseCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetRelationalDatabaseCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetRelationalDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRelationalDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetRelationalDatabaseCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRelationalDatabaseCommand extends $Command<GetRelationalDatabaseCommandInput, GetRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseCommandInput;
    constructor(input: GetRelationalDatabaseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseCommandInput, GetRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
